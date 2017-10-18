# is-lbf-module

Detect if a module is a LBF module


## Install

npm:

```
npm install is-lbf-module --save-dev
```

## Usage

```
import isLbfModule from 'is-module-module';

isLbfModule('qidian.comp.REST');                //true
isLbfModule('{theme}/srv/common/icons.css');    //true
isLbfModule('shtmlUI.shtml');                   //true
isLbfModule('globalSettings');                  //true

isLbfModule('./some_dir/some_module');          //false
isLbfModule('./index.vue');                     //false

```

## Notice

The rules might be not that correct as you expect. Inform me if any rule conflict with other modules.