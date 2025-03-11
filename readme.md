# overview
- Defines `HelloWorld` MFE that renders "Hello World!!" on load.
- Uses **`Maya.Store.SetData`** in the `OnLoad` event to update the store with the message.
- Links the component to its store (`Maya.Store.helloword`) for state management.
- Renders the message in the `main.html` view.
- Registered as a custom web component (`albert-helloworld`) within Maya.