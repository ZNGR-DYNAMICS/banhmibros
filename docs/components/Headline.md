# 1 `Headline.tsx`
[`/app/components/Headline.tsx`](../../app/components/Headline.tsx)

The Headline component displays a styled headline text across the whole width of the page, allowing to optionally set `AnimatedText` as a child to animate it.

## 1.1 Motivation
Has been created, to re-use a styled headline replacing titles or headings at the top of components or sections which improves overall consistency. 

## 1.2 Props
`<Headline>` cannot be used without a child. 

```tsx
interface HeadlineProps {
    children: React.ReactNode;
}
```

## 1.3 Implementation Notes
- [**AnimatedText**](/app/components/AnimatedText.tsx): Handles animated text effects and replaces its children with translated content.
- **Dynamic Translation**: The component uses template literal types (`data-${Language}`) to dynamically access translation attributes based on the current language provided by the [`useTranslation`](/app/hooks/useTranslation.tsx) hook.
- **User Interface**: The headline is a bold, simple text. The styling is as simple as possible, with the `poppins` font for all non-titles, and avoiding over-use of the main font `circula`.
- **User Experience**: Provides the user with a bold, meaningful sentence. Instead of using titles or headings at the top of sections or components, this headline is used. 

## 1.4 Potential Issues
- (this section would describe potential issues, risks, etc. which are known). 

## 1.4 History
- (this section would cover how the component has been changed and what knowledge has been gained with it)

### Similar Components
[`/app/components/Reviews/ReviewHeadline.tsx`](../../app/components/Reviews/ReviewHeadline.tsx)