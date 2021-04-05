/*
  * Copyright Laura Taylor
  * (https://github.com/techstreams/TSChatWise)
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */


// TSChatWise Configuration

const CONFIG_SHEET = 'Config'; // 🧰 Name of TSChatWise 'configuration' sheet

const LESSON_SHEET = 'Lessons'; // ✏️ Name of TSChatWise 'lessons' sheet

const ROOM_URL_COLUMN = 2;  // 🔗 CONFIG_SHEET column which contains the Chat Room URLs 
                            // (column numbering starts at 1)

const EMAIL_COLUMN = 5; // 📥 CONFIG_SHEET column which contains the 'Notify By Email When Complete' checkboxes 
                        // (column numbering starts at 1)

const DATE_FORMAT = "M/d/yyyy k:mm:ss"; // 📆 Timestamp format for posted lessons on LESSON_SHEET
                                       // See this site for more information 
                                       // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html


// TSChatWise Chat Message Configuration

const LESSON_BUTTON_TEXT = 'CLICK FOR LESSON'; // 🔳 Lesson chat message button text


/* 
 * This function posts lessons from the TSChatWise LESSON_SHEET 
 * to the Google Chat room(s) specified on the CONFIG_SHEET 
 * using a timed trigger manually configured by the TSChatWise Sheet owner
 * See https://support.google.com/chat/answer/7653861 for more on Google Chat rooms
 */
function postLessons() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  try {
    let config = getConfig(ss); // Get TSChatWise configuration from CONFIG_SHEET
    if (config.roomurls) {
      let lessons = getLessons(ss);  // Get TSChatWise lessons from LESSON_SHEET 
      if (lessons && lessons.length > 0) {
        let lesson = lessons.shift();  // Get first unposted lesson
        let payload = getContent(lesson);  // Get lesson content in Google Chat message format
        let options = {
              'method' : 'post',
              'contentType': 'application/json; charset=UTF-8',
              'payload' : JSON.stringify(payload)
            };
        let date = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), DATE_FORMAT);
        config.roomurls.forEach(room => UrlFetchApp.fetch(room, options));  // Post lesson to chat room(s)       
        ss.getSheetByName(LESSON_SHEET).getRange(lesson.row,1,1,2).setValues([[true,date]]); // Update lesson in LESSON_SHEET 
      }
      if (lessons.length === 0) {
        stopTrigger('postLessons');  // Delete timed trigger if all lessons have been posted
        if (config.emails) {
          sendEmail(ss,config.emails); // If enabled, send email notifications when lesson posting complete
        }
      }
    } else {
      console.log(`TSChatWise: No valid Google Chat Room URLs specified on ${CONFIG_SHEET} sheet`);
    } 
  } catch(err) {
    console.log(`TSChatWise: The following error occurred - "${err.message}"`);
  }
}

/* 
 * This function gets the TSChatWise configuration from the CONFIG_SHEET
 * @param {Spreadsheet} ss - current Google Sheet
 * @return {Object} configuration object representing the TSChatWise CONFIG_SHEET
 */
function getConfig(ss) {
  const config = ss.getSheetByName(CONFIG_SHEET);
  const rooms = config.getRange(2, ROOM_URL_COLUMN, config.getLastRow()-1).getValues()
                      .filter(row => row[0] !== '' && row[0].match(/^https:\/\/chat\.googleapis\.com/));
  const notifications = config.getRange(1,EMAIL_COLUMN,3).getValues().reduce((p,c) => p.concat(c));
  const emails = [];
  // If email notifications enabled and notify Sheet editors enabled then collect Sheet editor email addresses
  if (notifications[0] && notifications[1]) {
    ss.getEditors().forEach(editor => emails.push(editor.getEmail()));
  } 
  // If email notifications enabled and notify Sheet viewers enabled then collect Sheet viewer email addresses
  if (notifications[0] && notifications[1]) {
    ss.getViewers().forEach(viewer => emails.push(viewer.getEmail()));
  }  
  // Flatten Chat rooms array and remove duplicate entries in rooms and emails
  return {
    roomurls: rooms.length > 0 ? Array.from(new Set(rooms.reduce((p,c) => p.concat(c)))) : null,
    emails: emails.length > 0 ? Array.from(new Set(emails)) : null
  }
}

/* 
 * This function creates a Google Chat room post for a given lesson from the TSChatWise LESSON_SHEET 
 * @param {Object} lesson - a lesson from the TSChatWise LESSON_SHEET 
 * @return {Object} lesson content to be posted to a Google Chat room(s)
 */
function getContent(lesson) {
  const widgets = [];
  const image = {"image":{"imageUrl":lesson.image}};
  const buttons = {"buttons":[{"textButton": {"text":LESSON_BUTTON_TEXT,
                                "onClick":{"openLink":{"url":lesson.link}}}}]};
  let text = {"textParagraph":{"text": Utilities.formatString('<b>%s</b><br><br>%s<br>', lesson.name, lesson.description)}};
  if (lesson.type) {
    text = {"textParagraph":{"text": Utilities.formatString('<b>%s</b><br><br>%s<br>', lesson.name, lesson.description)}};
    widgets.push(text);
    if (lesson.image && lesson.image !== '') {
      widgets.push(image);
    }
    if (lesson.link && lesson.link !== '') {
      widgets.push(buttons);
    }
    return {"cards":[{"sections":[{"widgets": widgets}]}]};
  } else {
    return {"text":"*" + lesson.name + "*\n\n" + lesson.description};
  }
}

/* 
 * This function retrieves the lesson information from the TSChatWise LESSON_SHEET 
 * @param {Spreadsheet} ss - current Google Sheet
 * @return {<Object>} array of lesson objects from the TSChatWise LESSON_SHEET  (with column titles row removed)
 */
function getLessons(ss) {
  const data = ss.getSheetByName(LESSON_SHEET);
  const lessons = data.getDataRange().getValues().map((row,index) => {
    return {row:index+1,posted:row[0],name:row[2],description:row[3],
            type:row[4],link:row[5],image:row[6]};
  });
  lessons.shift(); // Shift off column titles row
  return lessons.filter(row => !row.posted);
}

/* 
 * This function sends email notifications when TSChatWise has completed posting lessons on LESSON_SHEET 
 * @param {Spreadsheet} ss - current Google Sheet
 * @param {<string>} emails - email addresses
 */
function sendEmail(ss,emails) {
  let email = `<a href="${ss.getUrl()}">${ss.getName()}</a> has completed!`,
      subject = `${ss.getName()} has completed!`;
  MailApp.sendEmail(emails.join(','),subject,'',{htmlBody: email});
}

/* 
 * This function deletes all time based triggers when TSChatWise has completed posting lessons on LESSON_SHEET 
 * @param {string} triggerFunction - TSChatWise Apps Script function to run for each trigger execution
 */
function stopTrigger(triggerFunction='postLessons') {
  ScriptApp.getProjectTriggers()
      .filter(trigger => trigger.getEventType() === ScriptApp.EventType.CLOCK && trigger.getHandlerFunction() === triggerFunction)
      .forEach(trigger => ScriptApp.deleteTrigger(trigger));
} 
