# Info window

Here you will find some uses for Google Maps Info Window component:

[[toc]]

## Adding info window to your Google Maps components

You can create info window by passing a custom HTML or Vue components as the child of `GMapInfoWindow` component:

```html
<GMapMap>
  <GMapMarker :key="index" v-for="(m, index) in markers">
    <GMapInfoWindow>
      <div>I am in info window</div>
      <MyComponent text="I am a custom component inside the info window!" />
    </GMapInfoWindow>
  </GMapMarker>
</GMapMap>
```

## Opening or closing an Info window

You can pass the `opened` prop to open or close a `GMapInfoWindow`:

```html
<GMapMap>
  <GMapMarker :key="index" v-for="(m, index) in markers">
    <GMapInfoWindow :opened="true">
      <div>I am in info window</div>
      <MyComponent text="I am a custom component inside the info window!" />
    </GMapInfoWindow>
  </GMapMarker>
</GMapMap>
```

## Adding custom options

You can pass any Google Maps Info Window component using the prop `options`:

```html
<GMapMap>
  <GMapMarker :key="index" v-for="(m, index) in markers">
    <GMapInfoWindow
      :opened="true"
      :options=" {
              pixelOffset: {
                width: 10, height: 0
              },
              maxWidth: 320,
              maxHeight: 320,
       }"
    >
      <div>I am in info window</div>
      <MyComponent text="I am a custom component inside the info window!" />
    </GMapInfoWindow>
  </GMapMarker>
</GMapMap>
```
