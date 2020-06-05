# TSChatWise

![](chalkboard.jpg)

*Image by [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436).*

<br>

### Take your G Suite organization's education to the NEXT level! 🚀

<br>

:point_right: *Supports both [G Suite for Education](https://edu.google.com/) and [G Suite for Business](https://gsuite.google.com/solutions/)!*


<br>

---

## Getting Started

* [TSChatWise Overview](https://medium.com/@techstreams/tschatwise-a-google-chat-education-tool-a9b96b78f780)
* 🚧

<br>

---

## TSChatWise Configuration Options

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

<br>

|  | NAME | TYPE | DESCRIPTION |
| :-------: | :----------------- | :----------------- | :----------------- |
| 🧰 | **`CONFIG_SHEET`** | **General** | Name of TSChatWise **`configuration`** sheet |
| ✏️ | **`LESSON_SHEET`** | **General** | Name of TSChatWise **`lessons`** sheet |
| 🔗 | **`ROOM_URL_COLUMN`** | **General** | **`CONFIG_SHEET` column** which contains the **Chat Room URL(s)** *(column numbering starts at 1)* |
| 📥 | **`EMAIL_COLUMN`** | **General** | **`CONFIG_SHEET` column** which contains the **`'Notify By Email When Complete'` checkboxes** *(column numbering starts at 1)* |
| 📆 | **`DATE_FORMAT`** | **General** | **Timestamp format** *(for posted lessons on `LESSON_SHEET`)*.  See more information on supported [timestamp formats](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html). |
| 🔳 | **`LESSON_BUTTON_TEXT`** | **Chat Message** | Lesson chat message **button text** |

<br>

---

## Credits

I'd like to thank the following project contributors:

* [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/)
* [Maren Deepwell](https://marendeepwell.com/)
* [Martin Hawksey](https://mashe.hawksey.info/)
* [Amit Agarwal](https://www.labnol.org/)
* [Ben Collins](https://www.benlcollins.com/)
* [Alice Keeler](https://alicekeeler.com/)
* [Sourabh Choraria](https://twitter.com/schoraria911)
* [Alicia Williams](https://twitter.com/presactlyalicia)
* [Stéphane Giron](https://twitter.com/st3phcloud)
* [Pablo Felip](https://twitter.com/pfelipm)
* [Steve Webster](https://www.swgapps.com/)
* [Anu Srivastava](https://github.com/asrivas)
* [Bruce McPherson](https://ramblings.mcpher.com/)
* [Luke Craig](https://twitter.com/teacher_luke_uk)
* [Tony Vincent](https://learninginhand.com/)
* [Jake Miller](https://twitter.com/jakemillertech)
* [Holly Clark](https://twitter.com/hollyclarkedu)
* [Wanda Terral](https://twitter.com/wterral)
* [Laura Tilton](https://twitter.com/tiltondata)
* [Alex Ivanov](https://github.com/contributorpw)
* [Kanshi Tanaike](https://github.com/tanaikech)
* [Charles Maxson](https://twitter.com/chasmaxson)
* [Yagisanatode](https://twitter.com/lifeofspy)
* [AppsScriptInfo](https://pulse.appsscript.info/)
* [Google For Education](https://twitter.com/googleforedu)
* [Google Sheets](https://www.google.com/sheets/about/)
* [Apps Script](https://developers.google.com/apps-script/overview)
* [Google Chat](https://support.google.com/chat/answer/7653601)


 
 
---

## License

**TSChatWise License**

© Laura Taylor ([github.com/techstreams](https://github.com/techstreams)). Licensed under an MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
