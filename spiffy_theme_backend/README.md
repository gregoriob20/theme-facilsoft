spiffy_theme_backend
====================
* The ultimate Odoo Backend theme with the most advanced key features of all time. Get your own personalized view while working on the Backend system with a wide range of choices. Spiffy theme has 3 in 1 Theme Style, Progressive Web App, Fully Responsive for all apps, Configurable Apps Icon, App Drawer with global search, RTL & Multi-Language Support, and many other key features.

Copyright and License
---------------------
* Copyright Bizople Solutions Pvt. Ltd.

* Other proprietary

Configuration
-------------
* For the search functionality with records search user need to first create records in Global search menu which located in Settings > Spiffy Configuration > Global Search

Usage
-----
* User can search both Menu and Recods in one popup
* T2304:
    - Updated XPath from web.FormView to web.ControlPanel to add a Close button in form view when using Split View mode.
* T2359 - VAA:
    - Update the menu item loading issue in spiffy. When open the menu by Ctrl + click it not load the apps menu items.
* T2359 - VAA:
    - Fix to set the menu (o_main_navbar) background on open in new browser tab by Ctrl + click.
* T2368 - VAA:
    - Add Toggle Button for List Expand & Collapse Group.
* T2369 - VAA:
    - Update the index file with new feature GIF and update all features list in index.
* T2537 - HPS:
    - Update new Fire base json file and set default in firebase_key_file field in res_company file.
* T2681 - DST:
    - Create a tab section and add the following four tabs to it: 
        1. Why Choose Us, 
        2. Documentation, 
        3. FAQs, 
        4. Spiffy Mobile App.
    - Change Support Banner 
* T2794 - PRR:
    - Change html Calendar to Default Odoo Calendar View in Column Search
    - Add Component for CalendarDialog
    - Fix design index for tabs
    - Add font family for li tag
    - Change font color for tabs
    - Fix padding for card-body in FAQ tab
    - Add font family for FAQ tab
* T2810 - PRR:
    - Add po file for Chinese, Dutch, Arabic and French
    - In the selector-active-menu-items template, replaced t-key="menu.name" with t-key="menu.id" in menuService.getApps() to fix the duplicate error.
    - Fix spelling mistake for Background
    - Change Spiffy Icon Image
* T3198 - PRR:
    - Fixed design issue occurring when attachment files were added in list view
    - Replaced ListRenderer XML file to fix columnWidths issue in list view
* T3227 - PRR:
    - Added user_id field in google.font.family model.
    - Applied a domain filter for Google Fonts based on both config_id and user_id.
    - Commented out Rubik demo data because it was causing incorrect behavior in user-specific font settings.
    - On user creation, a backend configuration record is Created to avoid config_id being False for first-time users.
    - Added default font family (Rubik) in XML static data and set related configurations accordingly.
* T3302 - PRR:
    - Fixed sticky list view issue.  
    - Fixed overlapping list view header in the Expense module.  
* T3384 - PRR:
    - Fix loading issue 
    - Change banner

Changelog
---------
* 16-06-2025 - T2304 - Fixed XPath for Close button to properly hide form view in split view mode when splitView is true (tree + form)
* 19-06-2025 - BIZOPLE-T2359 - VAA - Update the menu item loading issue in spiffy. When open the menu by Ctrl + click it not load the apps menu items.
* 19-06-2025 - BIZOPLE-T2359 - VAA - Fix to set the menu (o_main_navbar) background on open in new browser tab by Ctrl + click.
* 24-06-2025 - BIZOPLE-T2368 - VAA - Add Toggle Button for List Expand & Collapse Group.
* 24-06-2025 - BIZOPLE-T2369 - VAA - Update the index file with new feature GIF and update all features list in index.
* 26-06-2025 - T2537 - HPS - Update new firebase json file.
* 07-07-2025 - T2681 - DST -  Add 4 tabs in index (community & enterprise v18)
* 11-07-2025 - T2681 - DST -  Add 4 tabs in index (community & enterprise v18)
* 14-07-2025 - T2794 - PRR -  Default Odoo Calendar View in Column Search
* 15-07-2025 - T2810 - PRR -  Check issue in Theme Backend (version 18)
* 16-07-2025 - T2810 - PRR -  Check issue in Theme Backend (version 18)
* 08-08-2025 - T3198 - PRR -  Sppify Backend Theme Issue v18
* 13-08-2025 - T3227 - PRR -  Google Font not working for other users
* 18-08-2025 - T3302 - PRR -  Check Menu button issue in spiffy version 18 (community)
* 26-08-2025 - T3384 - PRR -  Check loading issue in spiffy version 18