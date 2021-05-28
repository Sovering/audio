
function onDocumentLoaded()
{
	console.log("Loaded");

	ACInitFFT();

	initializeAudioLayerControls();

	var audioLayerControl = document.querySelector("#audioLayerControl");
                audioLayerControl.removeAllSequenceEditors();
                var leftEditor = audioLayerControl.createSequenceEditor("Left Channel");
               
                
                audioLayerControl.setLinkMode(true);
}