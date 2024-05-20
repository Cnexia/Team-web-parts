document.addEventListener('DOMContentLoaded', function() {
    // Hide the top navigation bar
    var suiteNav = document.getElementById('SuiteNavPlaceHolder');
    if (suiteNav) {
        suiteNav.style.display = 'none';
    }

    var suiteNavWrapper = document.getElementById('SuiteNavWrapper');
    if (suiteNavWrapper) {
        suiteNavWrapper.style.display = 'none';
    }

    // Hide the SharePoint app bar
    var spAppBar = document.getElementById('sp-appBar');
    if (spAppBar) {
        spAppBar.style.display = 'none';
    }
    // Hide the SharePoint app bar
    var workbenchPageContent = document.getElementById('workbenchPageContent');
    if (workbenchPageContent) {
        workbenchPageContent.style.maxWidth = 'none';
    }
    // Example: Adjust styles for elements with a specific class
    var SPbarClass = document.querySelectorAll('.sp-appBar');
    SPbarClass.forEach(function(element) {
        SPbarClass.style.display= 'none'; // Replace with your actual property and value
    });
});
