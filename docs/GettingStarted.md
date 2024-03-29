# Getting Started with TSChatWise 

![](../chalkboard.jpg)

*Image by [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436).*

<br>

---

We've already seen how to use the **Config** sheet in the [Installation Guide](Install.md).  Now let's learn how to configure the **Lessons** sheet.

<br>

![](img/TSChatWiseStart10.png)

<br>


## Step 1: Configure Lessons

**TSChatWise** can post **two types** of lesson messages to Google Chat Rooms:

1. **[Simple Messages](#simple-messages)** - plain text messages with simple formatting options.
2. **[Card Messages](#card-messages)** - more complex user interface card messages.

> 👉 For more information on message types and formatting see [Google Chat Message Types and Formatting](#google-chat-message-types-and-formatting-options) below.

<br>

![](img/TSChatWiseStart3.png)

<br>


As show above, each row of the **Lesson** sheet represents a lesson to be posted to one or more Google Chat Rooms.  

Each row contains **seven data fields** representing each lesson to be posted.  These fields are outlined below.

**1. Posted**

A checkbox ***automatically*** checked by **TSChatWise** when a lesson is posted to any Google Chat Room.

👉 Add a checkbox for each new lesson. *Use the spreadsheet __Insert > Checkbox__ menu to add a new checkbox.*

👉 Make sure the checkbox is __unchecked__ before posting the lesson. 

👉 Uncheck box to reuse a lesson post. 

👉 Ensure that there are no extraneous checkboxes in this column or **TSChatWise** will try to post empty lessons.

<br>


**2. Posted On**

Date stamp ***automatically*** added by **TSChatWise** when a lesson is posted to any Google Chat Room.

👉 Do not modify this field.

<br>


**3. Post as Card Message**

Indicates whether the lesson is to be posted as a **[Simple Message](#simple-messages)** or **[Card Message](#card-messages)**.  


👉 Add a checkbox for each new lesson.  *Use the spreadsheet __Insert > Checkbox__ menu to add a new checkbox.*

👉 Check the box to send as a **[card message](#card-messages)**.

👉 Make sure there is an checkbox in this column before posting the lesson.  

<br>


**4. Lesson Name**

Name of lesson to be posted with lesson.  

👉 This is a **required field**.

<br>


**5. Lesson Description**

Lesson content to be posted.  

👉  This is a **required field**.

👉  Can contain additional formatting based upon type of message:  **[Simple Message](#simple-messages)** or **[Card Message](#card-messages)**.

<br>


**6. Lesson Link**

Link to additional lesson content to be included with the posted lesson.  

👉 This is a **optional field**.

👉 Link will be added to the end of the message body for **[Simple Messages](#simple-messages)** or as a clickable button link at the end of **[Card Messages](#card-messages)**.

<br>

**7. Lesson Image**

Link to a public accessible image to be included with **[Card Messages](#card-messages)** ONLY. 

👉 This is a **optional field**.

<br>

Posting a **[Simple Message](#simple-messages)** lesson as shown above will produce this output in a Google Chat room.


![](img/TSChatWiseStart2.png)


---

## Step 2: Schedule Lessons

Once the lessons have been configured on the **Lessons** tab, **TSChatWise** can be configured to run by setting up an Apps Script time-based trigger. 

![](img/TSChatWiseStart11.png)

<br>

To schedule a time-based trigger perform the following steps:

**Open the Google Apps Script Editor**

* Open the **TSChatWise** template *(copied in the [Installation](Install.md) step)*
* From the Sheet menu select **Tools > Script editor**

**Create a New Apps Script Time Based Trigger**

* In the Apps Script editor, click the **clock** icon on the left side
* In the dashboard, click the **+ Add Trigger** button on the bottom right
* Under **Choose which function to run** be sure to select **postLessons**
* Under **Select event source** select **Time-driven**
* Under **Select type of time based trigger** select the desired interval 
* Set any other desired time based trigger options
* Click the **Save** button to save the configuration

**TSChatWise** is now configured to run on the timed interval.  

Once **TSChatWise** has posted all the lessons to the configured Chat Rooms it will automatically unschedule the time-based trigger and send an email to the **TSChatWise** Google Sheet collaborators configured on the **TSChatWise Config** sheet.

To reuse the lessons, uncheck checkboxes in the first column of the **Lessons** sheet and reconfigure a new Apps Script trigger following the steps above.

---

<br>

## Google Chat Message Types and Formatting Options

**TSChatWise** can post **two types** of lesson messages to Google Chat Rooms:

1. **[Simple Messages](#simple-messages)** - plain text messages with simple formatting options.
2. **[Card Messages](#card-messages)** - more complex user interface card messages.

### Simple Messages

Simple Messages are messages which appear inline as if typed by a user.  

👉 Simple messages can contain symbols used to create special formatting.  

👉 For more on simple message formatting options see the [documentation](https://developers.google.com/hangouts/chat/reference/message-formats/basic).

<br>

Following is an example of a ***simple message*** sent to a Google Chat Room.
![](img/TSChatWiseStart4.png)

<br>

![](img/TSChatWiseStart5a.png)

<br>

Following is an example of a ***simple message with an alternate link*** sent to a Google Chat Room.

![](img/TSChatWiseStart6.png)

<br>

![](img/TSChatWiseStart7.png)

<br>

Following is an example of a ***simple message with code*** sent to a Google Chat Room.

![](img/TSChatWiseStart8.png)

<br>

![](img/TSChatWiseStart9.png)

<br>

### Card Messages

Card Messages are Google Chat messages which contain a more complex user interface in the form of cards.  

👉 Card messages can contain special formatting.  

👉 For more on card message formatting options see the [documentation](https://developers.google.com/hangouts/chat/reference/message-formats/cards#card_formatting).

Following is an example of a ***card message*** sent to a Google Chat Room.

![](img/TSChatWiseUsage1.png)

<br>

![](img/TSChatWiseUsage2.png)

<br>

Following is an example of a ***card message with an emoji*** sent to a Google Chat Room.

![](img/TSChatWiseUsage3.png)

<br>

![](img/TSChatWiseUsage4.png)

<br>

---


&nbsp;&nbsp; 👈 [Installation](Install.md) &nbsp;&nbsp;
