
# 1 Architecture
This section describes the overall structure of the project. It includes details about the PHP server for backend logic, the MySQL database for data storage, and the Vite-powered React frontend for the user interface. The API layer connecting these components is also outlined to give a clear understanding of how the project is structured.  
The web-experience is hosted on HostTech, more detailed information can be found in [DevOps](devops.md).

- [1 Architecture](#1-architecture)
  - [1.1 Components](#11-components)
  - [1.2 File Line Endings (LF / CRLF)](#12-file-line-endings-lf--crlf)


## 1.1 Components
Re-usable front-end components for the user-interface. The styling of components should not have any spacing, to be able to set the spacing according to the page's needs. 
Components should be responsive by default.

## 1.2 File Line Endings (LF / CRLF)
> The warning "This diff contains a change in line endings from 'LF' to 'CRLF'" is **completely unrelated** to your change in whitespace indentation from 2 to 4 spaces in your ESLint configuration.
> 
> 
> This warning specifically indicates that the changes you've made in your code repository involve altering the **line ending characters** used in the files.
> 
> Here's a breakdown of what it means:
> 
> - **LF (Line Feed):** This is the standard line ending character used in Unix-based systems (like macOS and Linux). It's represented by the ASCII character code 10.
> - **CRLF (Carriage Return Line Feed):** This is the standard line ending character used in Windows systems. It's a combination of two ASCII characters: Carriage Return (CR, code 13) followed by Line Feed (LF, code 10).
> 
> **Why is this a warning?**
> 
> Inconsistent line endings within a project can lead to several issues:
> 
> - **Cross-platform collaboration problems:** When developers using different operating systems work on the same project, their editors might automatically convert line endings. This can result in unnecessary and noisy diffs in your version control system (like Git), making it harder to track meaningful changes.
> - **Potential build or deployment issues:** In some rare cases, certain tools or scripts might be sensitive to the specific line ending used.
> - **Code review difficulties:** Reviewing code with mixed line endings can be confusing as the diff might highlight changes that are purely due to line ending conversions rather than actual code modifications.
> 
> **What caused this?**
> 
> The change in line endings likely occurred because:
> 
> - **Your editor's configuration:** Your code editor might be configured to use CRLF line endings, and when you saved the file after changing the indentation, it automatically converted the existing LF endings to CRLF.
> - **Git's autocrlf setting:** Git has a configuration setting called `core.autocrlf` that can automatically convert line endings when committing or checking out files. If this setting is enabled, it might have caused the conversion.
> - **Copying and pasting code:** If you copied code from a source that used different line endings, your editor might have retained those endings when you pasted it into your file.
> 
> **How to fix it:**
> 
> The best approach is to **normalize the line endings** across your entire project to a consistent format (ideally LF, as it's the more universally accepted standard). Here's how you can address this:
> 
> 1. **Configure your editor:** Ensure your code editor is configured to use LF as the default line ending for new files and when saving existing ones.
> 2. **Configure Git (recommended):** Use Git's `core.autocrlf` setting appropriately:
>     - **`git config --global core.autocrlf true` (for Windows users):** This will convert LF to CRLF on checkout and CRLF to LF on commit. This helps Windows users work seamlessly with projects using LF endings.
>     - **`git config --global core.autocrlf input` (for macOS and Linux users):** This will convert CRLF to LF on commit but leave LF as is on checkout. This is generally the recommended setting for non-Windows users.
>     - **`git config --global core.autocrlf false` (use with caution):** This disables any automatic line ending conversions. You'll need to ensure your editor is consistently using the desired line endings.
> 3. **Normalize existing files (if necessary):** If you already have mixed line endings in your repository, you might need to normalize them. There are various ways to do this, such as using Git attributes or dedicated tools. For example, you can create a `.gitattributes` file with the following content:Bash
>     - `text=auto eol=lf`
>     
>     Then, run the following Git commands:
>     
>     `git rm --cached -r .
>     git reset --hard`
>     
>     **Warning:** This will rewrite your repository, so make sure you have a backup or understand the implications before running these commands.
>     
> 
> **In summary:** The "line ending" warning is about the characters used to mark the end of a line in your text files and is separate from your code indentation preferences. You should address this warning to ensure consistency and avoid potential issues in your project.
> 
> I'm using LF endings in my vsc, but have just set the git config autocrlf to true, do I set it to false to use lf?
> 
> Yes, **you should set `git config --global core.autocrlf` to `input` or `false` if you want to consistently use LF line endings and are already using LF in your VS Code.**
> 
> Here's why:
> 
> - **`true` (for Windows):** This setting is designed for Windows users working on projects with LF line endings. Git will automatically convert LF to CRLF when you check out files (to match Windows conventions) and convert CRLF back to LF when you commit. Since you're already using LF in your editor, this setting will cause unnecessary conversions when you check out files, potentially leading to the "CRLF to LF" warning (the opposite of what you initially saw).
> - **`input` (recommended for macOS and Linux, and for Windows users who prefer LF):** This setting tells Git to convert CRLF to LF on commit but leaves LF line endings as they are on checkout. This is generally the best option if you want to enforce LF endings in your repository, regardless of the operating system of the contributors (as long as their editors are also configured to use LF).
> - **`false` (use with caution):** This disables any automatic line ending conversions by Git. 1  If you choose this, you **must** ensure that your editor (VS Code in your case) is consistently using LF line endings for all files in your project. If different developers on your team have editors with different line ending settings, you could end up with inconsistent line endings in your repository.  [1. The fuss with CRLF and LF in Git - DEV Community](https://dev.to/midnqp/the-fuss-with-crlf-and-lf-in-git-4nnf#:~:text=Having%20core.,t%20change%20the%20default%20setting.)
>     
>     [dev.to](https://dev.to/midnqp/the-fuss-with-crlf-and-lf-in-git-4nnf#:~:text=Having%20core.,t%20change%20the%20default%20setting.)
>     
>     [](https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTOvYdSAiZzqhz3i4QwVxACgurLNmTHOLeKylcffoEAYK7EWNPbsjPWp-ZMzf9JPrikkYzext8sbvavSLjeefXB)
>     
> 
> **Therefore, since you are using LF endings in VS Code and want to maintain that, the best options are:**
> 
> 1. **`git config --global core.autocrlf input`**: This is generally the safest and most recommended option for enforcing LF endings while still handling potential CRLF endings from other contributors gracefully.
> 2. **`git config --global core.autocrlf false`**: Use this option only if you are absolutely sure that your entire team and all your tooling are consistently using LF line endings.
> 
> **To set the configuration to `input`, run this command in your terminal:**
> 
> Bash
> 
> `git config --global core.autocrlf input`
> 
> **To set the configuration to `false`, run this command:**
> 
> Bash
> 
> `git config --global core.autocrlf false`
> 
> **Important Considerations:**
> 
> - **Existing Repository:** If your repository already has mixed line endings due to having `core.autocrlf` set to `true` previously, simply changing the setting won't automatically fix the existing files. You might need to normalize the line endings in your repository as mentioned in the previous response using `.gitattributes` or other methods.
> - **Team Collaboration:** If you are working in a team with Windows users, setting `core.autocrlf` to `input` is usually the best compromise to ensure everyone can work comfortably without introducing unnecessary line ending changes. Windows users should configure their editors to use LF as well if you want a truly consistent LF-only repository.
> 
> In summary, since you're aiming for LF endings and are already using them in VS Code, setting `git config --global core.autocrlf` to **`input`** is the recommended approach.
> 
> Response by Gemini 2.0 Flash 4/6/25