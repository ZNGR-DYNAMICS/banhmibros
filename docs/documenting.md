# 1 Guide to Documentation
Guide to document properly in this repository including decisions for this approach of documenting code. 

- [1 Guide to Documentation](#1-guide-to-documentation)
  - [1.1 Documenting in this project](#11-documenting-in-this-project)
    - [1.1.1 Decision against other tools](#111-decision-against-other-tools)
      - [Notion](#notion)
  - [1.2 VSC Markdown-Extensions](#12-vsc-markdown-extensions)

<br>

## 1.1 Documenting in this project
The best approach seems to be a combination of inline comments for functions, and markdown-files in the `docs`-folder, capturing in-depth approaches and decisions of code. Comments inside the code itself should be avoided, except for inline comments for functions.

Here's an example, on how functions or methods should be commented inside the code itself. This provides the intellisense with additional context, like description or example, without having to search the method itself in the documentation.

```ts
import { LayoutScrollContext } from './LayoutScroll.context';
/**
 * @component LayoutScrollProvider
 * @description A React Context Provider component for the LayoutScrollContext.
 * It makes the scroll ref available to consuming components.
 * @example
 * <LayoutScrollProvider value={scrollRef}>
 * {children}
 * </LayoutScrollProvider>
 */
export const LayoutScrollProvider = LayoutScrollContext.Provider;
```

It is important to note that all functions regardless of simplicity should be documented in this manner. 

### 1.1.1 Decision against other tools
While there are many useful code-documentation tools, the simplest approach is the one mentioned above. 
- Wide acceptance of markdown, directly view in IDE or on GitHub. 
- Reliability on other software and tools, causing more to keep track of. 
- Possible financial traps, free plans turning into paid plans, limited free-plan functionality, etc.

#### Notion
Notion is a great way to brainstorm and hold knowledge, though for documenting code it is sub-optimal. 

**Cons:**
- Disconnection from the code-base. 
- No version-control similar to git or GitHub.
- Increased friction by switching between Notion and the IDE. 
- External access limitations due to developers requiring an email invitation to the workspace. Adding them as a full member is also only a paid feature. 
- Collaboration challenges while the code-base is naturally handled through pull-requests, Notion does not support this type of collaboration and viewing exact changes. 

## 1.2 VSC Markdown-Extensions
The "Markdown All in One" Visual Studio Code extension allows for creating table of contents, and has other tools to enhance writing in markdown on VSC. 

> Name: Markdown All in One
> Id: yzhang.markdown-all-in-one
> Description: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
> Version: 3.6.3 (4/8/25)
> Publisher: Yu Zhang
> VS Marketplace Link: https://marketplace.visualstudio.com/items/?itemName=yzhang.markdown-all-in-one

Another useful extension for spell-checking is the "Code Spell Checker". When using this extension, it will initially mark spell-errors as Problems in the code-editor. This can be modified in the settings. 

> Name: Code Spell Checker
> Id: streetsidesoftware.code-spell-checker
> Description: Spelling checker for source code
> Version: 4.0.45 (4/8/25)
> Publisher: Street Side Software
> VS Marketplace Link: https://marketplace.visualstudio.com/items/?itemName=streetsidesoftware.code-spell-checker