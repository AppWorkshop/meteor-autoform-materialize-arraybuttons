Extends [gildaspk:autoform-materialize](https://github.com/djhi/meteor-autoform-materialize/) to modify the array
buttons to be much smaller, and also allows help text to be
defined in the schema.

It works by using [aldeed:template-extension]() to override the
[afArrayField_materialize](https://github.com/djhi/meteor-autoform-materialize/blob/master/components/afArrayField/afArrayField.html) template.

![image](https://cloud.githubusercontent.com/assets/1751645/17238581/7acf46fc-558f-11e6-8cd5-6fa76dc1fb9c.png)

### Installation

    meteor add appworkshop:autoform-materialize-array

### Usage

1. Define your help text in the schema as an ```autoform.help```
property of the schema item e.g.

    ```js
    var mySchema = new SimpleSchema({
      "Test":{
        type: "String",
        autoform: {
          help: "This is the help text"
        }
      }
    });
    ```

2. [optional] Override or apply styles to the ```form-field-help``` class.

    ```css
    span.form-field-help {
      color: @secondary;
      font-size: 0.8rem;
      display: block;
      margin-left: 1em;
    }

    ```

3. [optional] Overide or apply styles to the ```autoform-array-btn``` class.

    ```css
    .autoform-array-btn {
      color: red;
    }

    ```
    
4. [optional] Put the array-item delete buttons alongside the input fields.

    ```css
    
    .autoform-array-delete-btn {
      float: right;
    }
    
    .afArrayCollectionItem .input-field.col.s12 {
      width: calc(100% - 49px);
    }

    ```
