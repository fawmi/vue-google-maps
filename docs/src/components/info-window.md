# Info Window
[[toc]]
## Add info window to your components
You can create info window by passing custom HTML or Vue components as the child of `Marker` component.
```vue
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow>
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```

## Open/close info window
You can pass `opened` prop to open and close InfoWindows.

```vue{7}
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow
        :opened="true"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```
