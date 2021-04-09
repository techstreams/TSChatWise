# Getting Started with TSChatWise 

![](../chalkboard.jpg)

*Image by [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436).*

<br>

---

There are three sheets within the **TSChatWise** template.

1. Lessons
2. Config
3. Examples

We've already seen how to use the **Config** sheet in the [Installation Guide](Install.md).  Now let's turn our attention on how to configure the **Lessons** sheet.


## Step 1: Configure Lessons

**TSChatWise** can post **two types** of lesson messages to Google Chat Rooms:

1. **[Simple Messages](https://developers.google.com/hangouts/chat/reference/message-formats/basic)** - plain text messages with simple formatting options.
2. **[Card Messages](https://developers.google.com/hangouts/chat/reference/message-formats/cards)** - more complex user interface card messages.

Now let's look at how the **TSChatWise** lesson sheet is constructed.

![](img/TSChatWiseStart3.png)

As show above, there are seven data colums representing each lesson to be posted to Goolge Chat Room(s).

**1. Posted**

* Checkbox automatically checked by **TSChatWise** when a lesson is posted to any Google Chat Room.
* Uncheck to box to reschedule a lesson post.
* Make sure there is an unchecked box before in this column before posting the lesson.  Use the spreadsheet **Insert > Checkbox** menu to add a new checkbox.

**2. Posted On**

* Date stamp automatically added when a lesson is posted to any Google Chat Room.

**3. Post as Card Message**

* Indicates whether the lesson is to be posted as a **simple message** or **card message**.  Check the box to send as a **card message**.
* Make sure there is an checkox before in this column before posting the lesson.  Use the spreadsheet **Insert > Checkbox** menu to add a new checkbox.

**4. Lesson Name**

* Lesson name to be posted with lesson.  
* This is a **required field**.


**5. Lesson Description**

* Lesson content to be posted.  
* This is a **required field**.
* Can contain additional formatting based upon type of message:  **simple** or **card**.  See advanced formatting section for more.


**6. Lesson Link**

* Link to additional lesson content to be included with the posted lesson.  
* This is a **optional field**.
* Link will be added to the end of the message body for **Simple** messages or as a clickable button link at the end of **Card** messages.



To post a lessons to a Google Chat Room:

5. (Optional) Enter a link to a public accessible image to be included in **Card Message** posts only.

Posting a lesson as shown below

![](img/TSChatWiseStart3.png)

will produce this output in a Google Chat room.

![](img/TSChatWiseStart2.png)

* 🚧


---

## Step 2: Schedule Lessons

* 🚧

---

## Step 3: Test It Out

* 🚧

---

## Advanced TSChatWise Configuration

<br>

```javascript
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
```


|  | NAME | TYPE | DESCRIPTION |
| :-------: | :----------------- | :----------------- | :----------------- |
| 🧰 | **`CONFIG_SHEET`** | **General** | Name of **TSChatWise `configuration`** sheet |
| ✏️ | **`LESSON_SHEET`** | **General** | Name of **TSChatWise `lessons`** sheet |
| 🔗 | **`ROOM_URL_COLUMN`** | **General** | **`CONFIG_SHEET` column** which contains the **Chat Room URL(s)** *(column numbering starts at 1)* |
| 📥 | **`EMAIL_COLUMN`** | **General** | **`CONFIG_SHEET` column** which contains the **`'Notify By Email When Complete'` checkboxes** *(column numbering starts at 1)* |
| 📆 | **`DATE_FORMAT`** | **General** | **Timestamp format** *(for posted lessons on `LESSON_SHEET`)*.  See more information on supported [timestamp formats](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html). |
| 🔳 | **`LESSON_BUTTON_TEXT`** | **Chat Message** | Lesson chat **message button text** |

---

&nbsp;&nbsp; 👈 [Installation](Install.md) &nbsp;&nbsp; |  &nbsp;&nbsp; [Tips & Tricks](Tips.md) 👉 &nbsp;&nbsp;
