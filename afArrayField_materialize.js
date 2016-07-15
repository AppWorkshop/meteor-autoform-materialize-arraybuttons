
 
Template.afArrayField_materialize_smallButtons.helpers({
  getHelp(fieldName) {
    var schemaDef = AutoForm.getSchemaForField(fieldName);
    if (schemaDef.autoform) {
      return schemaDef.autoform.help;
    }
    return "";
  }

});

Template.afArrayField_materialize_smallButtons.replaces("afArrayField_materialize");
Template.afArrayField_materialize.inheritsHelpersFrom("afArrayField_materialize_smallButtons");

