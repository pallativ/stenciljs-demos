# Webcomponents

## shadowRoot

This is used for isolating styles of the webcomponents.

```
  this.attachShadow({ mode: "open" });
```

## hooks

1. connectedCallback
2. disconnectedCallback
3. attributeChangedCallback

## Extending Html elements

1. HTMLElement - This is generic html element.
2. HTMLAnchorElement - This is a <a></a> tag.

## Best Practises

use \_ for private methods, it's easy for developers to understand.

    ```
        _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
    ```

## host()

This is used for styling the webcomponent. .highlight is class in a styles. We can use any kind of selector inside the host.

```
:host(.highlight)
```

## host-context()
This is used for nested selector.

