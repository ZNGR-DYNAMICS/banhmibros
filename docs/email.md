# 1 Email Service
Allowing users to communicate through email with Banh Mi Bros, while staying professional through their own email address is key. 
This documentation provides information about how the mail server is configured, how new email addresses can be added through Plesk and how to install the email on a client's device. 

- [1 Email Service](#1-email-service)
  - [1.1 Getting Started](#11-getting-started)

<br>

## 1.1 Getting Started
1. Select any mail application and find an add new button to add a new email-address. 
2. Select the email type to be custom, POP3, or IMAP. Depending on platform or app, this setup may vary.
3. Outgoing and Incoming mail servers should be set to banh-mi-bros.ch
4. Incoming mail protocols should be set to POP3 (995) or IMAP (993).
5. Outgoing mail protocols should be SMTP (465).
6. Enter the respective credentials to login. 

<br>

| **Details**                                    |                       |                                        |
| ---------------------------------------------- | --------------------- | -------------------------------------- |
| Email                                          | hello@banh-mi-bros.ch | admin@banh-mi-bros.ch                  |
| Purpose                                        | General contact       | Admin Account (For 3rd-Party Accounts) |
| Outgoing mail server (requires authentication) | banh-mi-bros.ch       | banh-mi-bros.ch                        |
| Incoming mail server                           | banh-mi-bros.ch       | banh-mi-bros.ch                        |
|                                                |                       |                                        |
| **Protocols**                                  |                       |                                        |
| Supported outgoing mail protocols              | SMTP                  | SMTP                                   |
| Supported incoming mail protocols              | POP3, IMAP            | POP3, IMAP                             |
|                                                |                       |                                        |
| **Codes**                                      |                       |                                        |
| POP3                                           | 995                   | 995                                    |
| IMAP                                           | 993                   | 993                                    |
| SMTP                                           | 465                   | 465                                    |

