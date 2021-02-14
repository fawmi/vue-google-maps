# Info Window
You can create info window by passing custom HTML or Vue components as the child of `Marker` component.
```vue
  <GmapMap>
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GmapInfoWindow>
        <div>I am in info window <MyComponent/>
        </div>
      </GmapInfoWindow>
    </GmapMarker>
</GmapMap>
```

## Open/close info window
You can pass `opened` prop to open and close InfoWindows.

```vue{7}
  <GmapMap>
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GmapInfoWindow
        :opened="true"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GmapInfoWindow>
    </GmapMarker>
</GmapMap>
```
