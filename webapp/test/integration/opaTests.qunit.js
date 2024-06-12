sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mnformulas/test/integration/FirstJourney',
		'mnformulas/test/integration/pages/FormulasList',
		'mnformulas/test/integration/pages/FormulasObjectPage'
    ],
    function(JourneyRunner, opaJourney, FormulasList, FormulasObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mnformulas') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFormulasList: FormulasList,
					onTheFormulasObjectPage: FormulasObjectPage
                }
            },
            opaJourney.run
        );
    }
);