// Extend Maya Store with mfe
Maya.Store.helloworld = {
    events: {
        // Do the state management under events. Store data under components key.
        // Every instance of the MFE/ Maya component gets or inherits a unique ID.
        OnLoad: async ev => Maya.Store.SetData({store : 'helloworld', key : ev.key})({msg : `Hello ${ev.query || 'world'}!`})
    }
}

class HelloWorld extends MayaMFE {
    constructor() {
        super()
        this.setView('main')
        this.setStore(Maya.Store.helloworld)
    }
    getTitle = () => "HelloWorld"
    isSecured = () => false

    // No state management should be done in Component definition
    onLoad = async ev => Maya.Store.helloworld.events.OnLoad(ev)
    onQuery = async ev => {}
}

Maya.Register({ name : 'helloworld'})(HelloWorld);