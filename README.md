# TwitchExt-react


## Install

```npm i --save twitchext-react```

```yarn add twitchext-react```

## How to use

If you are not familiar with React hooks, take a look at [the documentation](https://reactjs.org/docs/hooks-intro.html)

App.js
```
import React from 'react'
import {ExtensionProvider} from 'twitchext-react'
import View from "./View";


const Panel = ()=>{
    return <ExtensionProvider>
      <View/>
    </ExtensionProvider>
}

export default Panel
```

View.js
```
import React from 'react'
import {useExt} from 'twitchext-react'

const Example = ()=>{
  const ext = useExt()
  
  return <div>{ext.viewer.opaqueId}</div>
}

export default Example
```

## Structure

The data structure is based on the - [Twitch Extension Helper](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper)

You can access the data using the same structure

`clientId:string` extension client id, initialized after the first onAuthorized callback calls

### Custom data

#### Channel
`channel.initialized:boolean` return if the channel information have been set.

`id:string` return the channel id of the stream.

#### Configuration Service
`configuration.initialized:boolean` return if the configuration service has been set.

#### Context

For the default data structure see the [OnContext method](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper).

The same structure is used to store the data under the `context` field.

`context.initialized:boolean` return if the context information have been set.

#### Viewer
`viewer.initialized:boolean` return if the viewer information have been set.

#### Features
`features.initialized:boolean` return if the viewer information have been set.

## Other framework

### Vue
You can use my other package for VueJs/Vuex : [TwitchExt-Vuex](https://www.npmjs.com/package/twitchext-vuex) 

## Resources
- [Twitch Documentation](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper)