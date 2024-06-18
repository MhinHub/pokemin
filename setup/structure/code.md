# Code

{% hint style="info" %}
**Good to know:** Emphasizes the principles of KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself)
{% endhint %}

use the `import alias` method to make it cleaner and easier to understand.

{% tabs %}
{% tab title="Use Aliasing" %}
```tsx
import Button from '@/components/ui/Button';
```
{% endtab %}

{% tab title="Unused Aliasing" %}
```tsx
import Button from '../../components/ui/Button';
```
{% endtab %}
{% endtabs %}

***

Using the constant arrow function method\
\> Always use capitalize for naming of component

```tsx
const Button = () => {
```

* export it with:

{% tabs %}
{% tab title="Single" %}
```tsx
export default Button;
```
{% endtab %}

{% tab title="children" %}
```tsx
export {ButtonWithIcon, ButtonWithText};
// or
export const Button = () => {
```
{% endtab %}
{% endtabs %}

