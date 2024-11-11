const MENUITEMS = [
  {
    title: "Getting Started",
    children: [
      {
        title: "Getting Started",
        path: "/getting_started",
        headings: [
          { title: "Getting Started", id: "gettingStarted" },
          { title: "Folder Structure", id: "folderStructure" },
          { title: "Installation Guide", id: "installationGuide" },
          { title: "Theme Layout", id: "themeLayout" },
          { title: "Theme Customizer", id: "themeCustomizer" },
          { title: "sidebar", id: "sidebar" },
          { title: "Dark Layout", id: "darkLayout" },
          { title: "SCSS Structure", id: "scssStructure" },
          { title: "Creating New Page", id: "creatingNewPage" },
          { title: "Routing Guide", id: "routingGuide" },
          { title: "useContext hook", id: "useContext" },
          { title: "Loader", id: "loader" },
          { title: "Multi Language", id: "multiLanguage" },
          { title: "Authentication System", id: "authenticationSystem" },
          { title: "Components", id: "components" },
          { title: "Apps", id: "apps" },
        ],
      },
      {
        title: "Folder Structure",
        path: "/getting_started/folder_structure",
        headings: [
          { title: "Pages", id: "pages" },
          { title: "Components", id: "components" },
          { title: "Assets", id: "assets" },
          { title: "Json Data", id: "jsonData" },
        ],
      },
      {
        title: "Installation",
        path: "/getting_started/installation",
        headings: [
          { title: "Installation", id: "installation" },
          { title: "Prerequisites", id: "prerequisites" },
          {
            title: "React Setup",
            id: "reactSetup",
            innerHeadings: [
              { title: "Create Initial Application", id: "createInitial" },
              { title: "Serve Application", id: "serveApplication" },
            ],
          },
          {
            title: "Build Application",
            id: "buildApplication",
          },
          {
            title: "Cuba Setup",
            id: "cubaSetup",
            innerHeadings: [
              { title: "Node.js", id: "nodejs" },
              { title: "Cuba Theme Setup", id: "CubaThemeSetup" },
            ],
          },
        ],
      },
      {
        title: "Theme Layouts",
        path: "/getting_started/theme_layouts",
        headings: [
          { title: "Layout Settings", id: "layoutSetting" },
          { title: "Pages", id: "pages" },
          { title: "Dubai", id: "dubai" },
          { title: "London", id: "london" },
          { title: "Seoul", id: "seoul" },
          { title: "Los Angeles", id: "losAngeles" },
          { title: "Paris", id: "paris" },
          { title: "Tokyo", id: "tokyo" },
          { title: "Madrid", id: "madrid" },
          { title: "Moscow", id: "moscow" },
          { title: "New York", id: "newYork" },
          { title: "Singapore", id: "singapore" },
          { title: "Rome", id: "rome" },
          { title: "Barcelona", id: "barcelona" },
        ],
      },
      {
        title: "Layout Types",
        path: "/getting_started/layout_types",
        headings: [
          { title: "Layout Types", id: "layout-types" },
          { title: "LTR", id: "ltr" },
          { title: "RTL", id: "rtl" },
          { title: "Boxed", id: "boxed" },
          { title: "Default Layout", id: "default-layout" },
        ],
      },
      {
        title: "Sidebar Options",
        path: "/getting_started/sidebar_options",
        headings: [
          { title: "Sidebar Options", id: "sidebar-options" },
          { title: "Border Sidebar", id: "border-sidebar" },
          { title: "Icon Color Sidebar", id: "icon-color-sidebar" },
        ],
      },
      { title: "Unlimited Colors", path: "/getting_started/unlimited_colors", headings: [{ title: "Unlimited Colors", id: "unlimited-colors" }] },
      {
        title: "Mix Layout",
        path: "/getting_started/mix_layout",
        headings: [
          { title: "Mixed Layout", id: "mixed-layout" },
          { title: "Light Sidebar", id: "light" },
          { title: "dark Sidebar", id: "dark-sidebar" },
          { title: "dark Sidebar", id: "dark" },
        ],
      },
      {
        title: "Sidebar",
        path: "/getting_started/sidebar",
        headings: [
          { title: "Sidebar", id: "sidebar" },
          { title: "Example", id: "example" },
        ],
      },
      {
        title: "Dark",
        path: "/getting_started/dark",
        headings: [{ title: "Dark Layout", id: "dark" }],
      },
      {
        title: "SCSS Structure",
        path: "/getting_started/scss_structure",
        headings: [
          { title: "Scss folder Structure", id: "folder-structure" },
          { title: "Explanation", id: "explanation" },
          { title: "Components Folder", id: "components" },
          { title: "Layout Folder", id: "layout" },
          { title: "Pages Folder", id: "pages" },
          { title: "Theme Folder", id: "theme" },
          { title: "Utils Folder", id: "utils" },
          { title: "Vendors Folder", id: "vendors" },
        ],
      },
      { title: "Create New Page", path: "/getting_started/create_new_page", headings: [{ title: "Create New Page", id: "create-new-page" }] },
      { title: "Routing", path: "/getting_started/routing", headings: [{ title: "Routing in React", id: "routing" }] },
      { title: "useContext Hook", path: "/getting_started/useContext_hook", headings: [{ title: "useContext hook", id: "useContext" }] },
      { title: "Loader", path: "/getting_started/loader", headings: [{ title: "loader", id: "loader" }] },
      {
        title: "Multi Language",
        path: "/getting_started/multi_language",
        headings: [
          { title: "Multi-Language Support", id: "multi_lang" },
          { title: "multi-language functionality", id: "multi_language_functionality" },
          { title: "react-i18next package configuration & implementation", id: "package_configuration" },
        ],
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Basic UI Elements",
        path: "/components/basic_ui_elements",
        headings: [
          { title: "Button", id: "button" },
          { title: "Tag & Pills", id: "tag&Pills" },
          { title: "Progress Bar", id: "progressBar" },
          { title: "Alert", id: "alert" },
          { title: "Popover", id: "popover" },
          { title: "Tooltip", id: "tooltip" },
          { title: "Dropdown", id: "dropdown" },
          { title: "Tabs", id: "tabs" },
          { title: "According", id: "according" },
        ],
      },
      {
        title: "advance UI Elements",
        path: "/components/advance_ui_elements",
        headings: [
          { title: "Scrollable", id: "scrollable" },
          { title: "Step", id: "step" },
          { title: "Toaster", id: "toaster" },
          { title: "Tour", id: "tour" },
          { title: "Rating", id: "rating" },
          { title: "Pagination", id: "pagination" },
          { title: "Sweet Alert", id: "sweetAlert" },
          { title: "Range Slider", id: "rangeSlider" },
          { title: "Image Cropper", id: "imageCropper" },
          { title: "Drag and Drop", id: "dragDrop" },
          { title: "Dropzone", id: "dropzone" },
          { title: "Image Upload", id: "imageUpload" },
        ],
      },
      {
        title: "Forms",
        path: "/components/forms",
        headings: [
          { title: "Forms", id: "forms" },
          { title: "Form Validation", id: "formValidation" },
          { title: "Date Picker", id: "datePicker" },
          { title: "Typeahead", id: "typeahead" },
        ],
      },
      {
        title: "Tables",
        path: "/components/tables",
        headings: [
          { title: "Tables", id: "tables" },
          { title: "Table", id: "table" },
          { title: "Smart table", id: "smartTable" },
        ],
      },
      {
        title: "Charts",
        path: "/components/charts",
        headings: [
          { title: "Apex Charts", id: "apexCharts" },
          { title: "Google Charts", id: "googleCharts" },
          { title: "Knob Charts", id: "knobCharts" },
          { title: "Chartjs Charts", id: "chartJsCharts" },
          { title: "Chartist Charts", id: "chartistCharts" },
        ],
      },
      {
        title: "maps",
        path: "/components/maps",
        headings: [
          { title: "Google Map", id: "googleMap" },
          { title: "Leaflet Map", id: "leafletMap" },
        ],
      },
      {
        title: "Editors",
        path: "/components/editors",
        headings: [
          { title: "Simple Editor (ck Editor)", id: "ckEditor" },
          { title: "MDE Editor", id: "mde" },
        ],
      },
    ],
  },
  {
    title: "Useful Apps",
    children: [
      { title: "Gallery", path: "/useful_apps/gallery", headings: [{ title: "Gallery", id: "gallery" }] },
      { title: "To-Do", path: "/useful_apps/to_do", headings: [{ title: "To-Do", id: "toDo" }] },
      { title: "Bookmark Search", path: "/useful_apps/bookmark_search", headings: [{ title: "bookmarkSearch", id: "bookmarkSearch" }] },
      { title: "Calender", path: "/useful_apps/calender", headings: [{ title: "Calender", id: "calendar" }] },
      {
        title: "Others",
        path: "/useful_apps/others",
        headings: [
          { title: "Knowledge Base", id: "knowledge" },
          { title: "Job Search", id: "job" },
          { title: "Learning", id: "learning" },
          { title: "Social App", id: "social" },
        ],
      },
    ],
  },
  {
    title: "Integration",
    children: [{ title: "Fake JSON", path: "/integration/fake_json", headings: [{ title: "FakeJson", id: "fakeJson" }] }],
  },
  {
    title: "Credits",
    children: [{ title: "Credits", path: "/credits" }],
  },
  {
    title: "Faq",
    children: [{ title: "Faq", path: "/faq" }],
  },
];

export default MENUITEMS;
