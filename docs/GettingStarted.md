# Getting Started with TSChatWise 

![](../chalkboard.jpg)

*Image by [Peggy Dyar](https://pixabay.com/users/4Me2Design-3106045/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2629436).*

<br>

---

There are two sheets within the **TSChatWise** template.

1. Lessons
2. Config


![](img/TSChatWiseStart10.png)

We've already seen how to use the **Config** sheet in the [Installation Guide](Install.md).  Now let's learn how to configure the **Lessons** sheet.

<br>


## Step 1: Configure Lessons

**TSChatWise** can post **two types** of lesson messages to Google Chat Rooms:

1. **Simple Messages** - plain text messages with simple formatting options.
2. **Card Messages** - more complex user interface card messages.

> 👉 For more information on message types and formatting see [Usage Tips](Usage.md).

<br>

![](img/TSChatWiseStart3.png)

<br>


As show above, each row of the **Lesson** sheet represents a lesson to be posted to one or more Google Chat Rooms.  Each row contains **seven data fields** representing each lesson to be posted.  These fields are outlined below.

**1. Posted**

A checkbox ***automatically*** checked by **TSChatWise** when a lesson is posted to any Google Chat Room.

👉 Add a checkbox for each new lesson


👉 Use the spreadsheet **Insert > Checkbox** menu to add a new checkbox.

👉 Make sure the checkbox is __unchecked__ before posting the lesson. 

👉 Uncheck box to schedule/reschedule a lesson post. 

👉 Ensure that there are no extraneous checkboxes in this column or **TSChatWise** will try to post empty lessons.

<br>


**2. Posted On**

Date stamp ***automatically*** added when a lesson is posted to any Google Chat Room.

👉 Do not modify this field.

<br>


**3. Post as Card Message**

Indicates whether the lesson is to be posted as a **[Simple Messages](Tips.md#simple-messages)** or **[Card Messages](Tips.md#simple-messages)**.  


👉 Add a checkbox for each new lesson.

👉 Check the box to send as a **card message**.

👉 Use the spreadsheet **Insert > Checkbox** menu to add a new checkbox.

👉 Make sure there is an checkox in this column before posting the lesson.  

<br>


**4. Lesson Name**

Name of lesson to be posted with lesson.  

👉 This is a **required field**.

<br>


**5. Lesson Description**

Lesson content to be posted.  

👉  This is a **required field**.

👉  Can contain additional formatting based upon type of message:  **[Simple Messages](Tips.md#simple-messages)** or **[Card Messages](Tips.md#simple-messages)**.  See [advanced formatting section](#Tips.md#simple-messages) below for more.

<br>


**6. Lesson Link**

Link to additional lesson content to be included with the posted lesson.  

👉 This is a **optional field**.

👉 Link will be added to the end of the message body for **[Simple Messages](https://developers.google.com/hangouts/chat/reference/message-formats/basic)** messages or as a clickable button link at the end of **[Card Messages](https://developers.google.com/hangouts/chat/reference/message-formats/cards)** messages.

<br>

**7. Lesson Image**

Link to a public accessible image to be included with **[Card Messages](https://developers.google.com/hangouts/chat/reference/message-formats/cards)** messages ONLY. 

👉 This is a **optional field**.

<br>

Posting a **[Simple Message](https://developers.google.com/hangouts/chat/reference/message-formats/basic)** lesson as shown above will produce this output in a Google Chat room.


![](img/TSChatWiseStart2.png)


---

## Step 2: Schedule Lessons

Once the lessons have been configured on the **Lessons** tab, TSChatWise can be configured to run by setting up Google Apps Script time based triggers.  To schedule a time based trigger for TSChatWise perform the following steps:

1. 

---


&nbsp;&nbsp; 👈 [Installation](Install.md) &nbsp;&nbsp; |  &nbsp;&nbsp; [Tips & Tricks](Tips.md) 👉 &nbsp;&nbsp;
