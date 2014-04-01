var Volfram1 = [
{text: "Hey!", "char": "Enfys"},
{text: "What is it this time?", "char": "Volfram"},
{text: "Gwen's been out for awhile and I'm starting to get tired of waiting.", "char": "Enfys"},
{text: "Let's play or something.", "char": "Enfys"},
{text: "What exactly is there to play around here?", "char": "Volfram"},
{text: "Go bug Liel or something.", "char": "Volfram"},
];

nextDialog: function(){
var dialog = dialogTree.shift();
if(this.dialogBox){
this.removeChild(this.dialogBox);
}
this.dialogBox = new Dialog(dialog.text);
this.addChild(this.dialogBox);
this.dialogBox.onClose = this.nextDialog.bind(this);
this.dialogBox.init();
// todo: implements show char
}