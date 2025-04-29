# 1 `Link.tsx`

Displays a Link, replacing the anchor-tag `<a>`. Uses Framer Motion to animate the component, and resizes the content, based on screen-size. 

## 1.1 Motivation
Was implemented to provide a re-usable Link-component, without having to hard-code `<a>` across the project. 
It displays a neat top-bottom animation, indicating it is a link. 

## 1.2 Props

`<Link>` cannot be used without a child. 

```tsx
interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    'data-en'?: string;
    'data-de'?: string;
}
```

## 1.3 Implementation Notes
- **Dual-Component**: Incase screen-sizes change, the content no longer fits, due to two components being on top of each other, creating this animation. 
  - A useEffect checks for the resizing of those objects, ensuring the two divs are resized accordingly, ensuring the animation also is performed correctly, based on calculated, absolute values. 
- **Hardcoded Dynamic Translation**: Has a hard-coded version of the current `useTranslation.tsx` hook, which should be updated in the future. 
- **Children**: The Link has to be fed with props, to display content. 
- **User Experience**: Indicates this is a link, through an animation and color change.
- **User Interface**: Updates to the brand's orange color on hover, and animates to be bold and get the user's attention. 

## 1.4 Potential Issues
- **Target blank**: It has not been tested, whether the component allows for setting `target=_blank`, to open the link in a new tab. 

## 1.5 History
(this section would cover how the component has been changed and what knowledge has been gained with it)