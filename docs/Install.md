# Install and Configure TSChatWise 

![](../chalkboard.jpg)

*Image by [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436).*

<br>

---

## Step 1: Install TSChatWise

To install **TSChatWise**:

> * *Login to [Google Drive](https://drive.google.com/).*
> * *Access the __TSChatWise__ Google Sheets __[template](https://techstreams.page.link/TSChatWise)__.*
> * *Click the __Use Template__ button. This will copy the sheet template to Google Drive.*

---

<br>

## Step 2: Create Chat Room(s)

Follow the steps outlined in the [Google Chat Room - Create a room](https://support.google.com/chat/answer/7653861?hl=en&ref_topic=7649113) documentation to setup a Google Chat room. 

👉 *TSChatWise can post the same lesson to __multiple__ Google Chat rooms.*

👉 *[Google Chat must be enabled](https://support.google.com/a/answer/7651884?hl=en) in your domain to setup Google Chat.  Check with your G Suite Administrator if Google Chat is disabled.*

<br>

## Step 3: Create Chat Room Webhook

**Access the Chat Room Webhooks**

* Go to [Google Chat](https://chat.google.com)
* Select the desired **Chat room** from the left side of the screen
* Select the **dropdown** for the room name at the top of the screen
* Select **Manage webhooks**

<br>

**Enter a Webhook Name**

* Enter a webhook name **TSChatWise**
* *(Optional) Enter an Avatar URL*
* Click **Save**

*:point_right: Multiple chat bots can provide notifications to a single [Google Chat Room](https://gsuite.google.com/products/chat/).  Be sure to use descriptive webhook names to distinguish multiple bots.*

<br>

**Make a Copy of the URL**

* Click the **Copy** button to make a copy of the webhook URL

<br>

## Step 4: Configure TSChatWise

**Open TSChatWise template**

* Open the __TSChatWise Google Sheet__ copied to your Google Drive during **[Step 1](#step-1-install-tschatwise)** above.
* Navigate to the __Config__ sheet.
 
**Add Chat Room Webhook URL to TSChatWise 'Config' Sheet**

* Under **Chat Room Name** enter the name of the Chat room from **[Step 3](#step-3-create-chat-room-webhook)** above.
* Under **Chat Room URL** enter the Webhook URL copied in **[Step 3](#step-3-create-chat-room-webhook)** above.

![](img/TSChatWiseInstall1.png)

**Configure Notifications When Lessons Complete**

To be notified when all lessons have been posted to all chat rooms:

* Check the box to the right of **Notify By Email When Complete**
  * Check the box to the right of **Email Sheet Editors** for all TSChatWise Google Sheet editors & owner to be notified.
  * *(Optional)* Check the box to the right of **Email Sheet Viewers** for all TSChatWise Google Sheet viewers to be notified.

<br>

## Step 6: Test TSChatWise

*  Select **TSChatWise > Test TSChatWise** option from the Google Sheet menu.  *This will send a test message to each configured chat room.*

*:point_right: The __first time__ TSChatWise is run it will __require authorization__.  Follow the Google prompts to authorize TSChatWise and then rerun the __TSChatWise > Test TSChatWise__ option again from the Google Sheet menu.*


![](img/TSChatWiseInstall2.png)

<br>

## Important Notes

:point_right: Multiple versions of **TSChatWise** can be used to provide notifications to a single [Google Chat Room](https://gsuite.google.com/products/chat/).

:point_right: A single version of **TSChatWise** can provide notifications to multiple [Google Chat Rooms](https://gsuite.google.com/products/chat/).

:point_right: Check the [Apps Script Dashboard](https://script.google.com) for execution errors if **TSChatWise** does not work as expected.

---

## Advanced TSChatWise Configuration Options

**TSChatWise** provides some advanced configuration options.  The following code and table outline the configuration options which can be changed by the TSChatWise Google Sheet owner to provide a more customized experience.

To change any of the advanced configuration options:

* Click the **Tools > Script editor** menu from the __TSChatWise Google Sheet__ copied to your Google Drive during **[Step 1](#step-1-install-tschatwise)**.
* Find the configuration option(s) shown below in the __Code.gs__ file and make the appropriate change(s).
* __Save__ the changes and return to the __TSChatWise Google Sheet__ copied to your Google Drive during **[Step 1](#step-1-install-tschatwise)**.


*:point_right: Use __caution__ when making changes to the source code.*


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

&nbsp;&nbsp; 👈 [About](About.md) &nbsp;&nbsp; |  &nbsp;&nbsp; [Getting Started](GettingStarted.md) 👉 &nbsp;&nbsp;
