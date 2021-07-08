  # Description
  
  Date picker allows the user to select a specific date or a range of dates. Follows aria guidelines from [w3.org - Date Picker Dialog Example for keyboard navigation](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html). React component based on bootstrap, typescript and SVG, build with webpack.

# Install

`yarn add @scherler/bootstrap-datepicker`

In your component do something like: 

```

import { Datepicker } from "@scherler/bootstrap-datepicker";
...
const [selection, setSelection] = useState<number[]>([]);
...
 <Datepicker isRange callback={(timestamps: number[]) => setSelection(timestamps)} />
```

`selection` in our example would be an array of two timestamps since we are using `isRange`, otherwise it would de only one timestamp in the array. 

## Run 

Please see the storybook story for more config options and preview.

```
yarn start
```
![image](https://user-images.githubusercontent.com/596701/124996911-13d72280-e04a-11eb-9d89-e45fef166d90.png)
![image](https://user-images.githubusercontent.com/596701/124997659-54836b80-e04b-11eb-8f92-1a010bb48dd2.png)


## Build
```
yarn
yarn build
```

## Test
```
yarn test
```

# Dependencies
```
  "dependencies": {
    "bootstrap": "5.0.2",
    "d3-time": "3.0.0",
    "react": "16.13.1",
    "react-bootstrap": "1.6.1",
    "react-dom": "16.13.1",
    "react-icons": "4.2.0"
  },
  ```

# Feature/Change requests and Bugs

Please use the issue tracker to submit new feature requests, change requests or bug reports. 
