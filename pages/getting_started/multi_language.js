import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const codeData = {
  step1: `import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';`,
  step2: `i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    'General': 'General',
                    'Dashboards,Widgets': 'Dashboards,Widgets',
                    'Dashboard': 'Dashboard',
                    'Default': 'Default',
                  
                }
            },
             es: {
                translations: {
                    'General': 'General',
                    'Dashboards,Widgets': 'Cuadros de mando, widgets',
                    'Dashboard': 'Tablero',
                    'Default': 'Defecto',
                }
            },
            cn: {
                translations: {
                    'General': '一般',
                    'Dashboards': '仪表板',
                    'Widgets':'小部件',
                    'Dashboard': '仪表板',
                 
                }
            },
        },
        fallbackLng: 'en',
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });`,
  step3: `
  import "../../public/assets/scss/app.scss";
  import { useRouter } from "next/router";
  import { withoutLayoutThemePath } from "Data/OthersPageData";
  import { ToastContainer } from "react-toastify";
  import { ProjectProvider } from "helper/project/ProjectProvider";
  import "../../i18n";
  import { TaskProvider } from "helper/Task/TaskProvider";
  import "../../public/assets/scss/app.scss";
  import LayoutProvider from "helper/Layout/LayoutProvider";
  import Layout from "../layout";
  import { BookmarkProvider } from "helper/Bookmark/BookmarkProvider";
  import { CustomizerProvider } from "helper/Customizer/CustomizerProvider";
  import TodoListProvider from "helper/TodoList/TodoListProvider";
  import ContactProvider from "helper/Contacts/ContactProvider";
  import withAuth from "helper/WithAuth";
  
  const Myapp = ({ Component, pageProps }: any) => {
    const getLayout =Component.getLayout || ((page: any) => <Layout>{page}</Layout>);
    const router = useRouter();
    const currentUrl = router.asPath;
  
    return (
      <>
        {withoutLayoutThemePath.includes(currentUrl) ? (
          <Component {...pageProps} />
        ) : (
          <CustomizerProvider>
            <TodoListProvider>
              <ProjectProvider>
                <LayoutProvider>
                  <TaskProvider>
                    <BookmarkProvider>
                      <ContactProvider>
                        {getLayout(<Component {...pageProps} />)}
                      </ContactProvider>
                    </BookmarkProvider>
                  </TaskProvider>
                </LayoutProvider>
              </ProjectProvider>
            </TodoListProvider>
          </CustomizerProvider>
        )}
        <ToastContainer />
      </>
    );
  };
  
  export default withAuth(Myapp);
   `,
  step4: `import { useTranslation } from 'react-i18next';`,
  step5: `const Language=()=>{
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };

    return(
       <ul>
          <li onClick= {() => changeLanguage('en')} >
            <a href="#javascript">
              <i className="flag-icon flag-icon-is"></i> English
            </a>
          </li>
          <li onClick:{() => changeLanguage('es') }>
            <a href="#javascript">
              <i className="flag-icon flag-icon-um"></i> Spanish
            </a>
          </li>
          </ul>
    )
  }
export default Language`,
  step6: `import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
  const SidebarMenuItems = () => {
    const { t } = useTranslation();
  return(
    <ul>
      <li>{t('Dashboard')}</li>
      <li>{t('Ecommerce')}</li>
    </ul>
  )
}
export default SidebarMenuItems;`,
};

const MultiLanguage = () => {
  return (
    <div className='row'>
      <div className='col-12 '>
        <h1 className='main-title title-with-link' id='multi_lang'>
          Multi-Language Support
          <DemoButton preview='https://cuba-nextjs.vercel.app/dashboard/default' official='https://www.npmjs.com/package/react-i18next' />
        </h1>
      </div>
      <p>Considering that there will be users from multiple different countries, you might need to add the support for multiple languages.To help you with that, we have made the sidebar compatible with the multiple language functionality.</p>
      <p>You can find the dropdown that changes the language in the header.</p>
      <Img className='img-fluid mb-3 img-border img-80' src='/assets/images/document/vue/codeSnaps/language_change.png' alt='' />
      <h4 className='sub-title' id='multi_language_functionality'>
        How does multi-language functionality works?
      </h4>
      <p>
        {' '}
        <strong>react-i18next</strong> to implement the functionality fo multi-language, you can install it by running the following command in the terminal. We have used the package <strong>react-i18next</strong> to implement the functionality fo multi-language, you can install it by running the following command in the terminal.
      </p>
      <CodeShowCaseBox code={'npm install --save react-i18next'} />
      <h4 className='sub-title' id='package_configuration'>
        react-i18next package configuration and implementation in the project:
      </h4>
      <p>After you have finished installing react-i18next package in your project, follow the below given steps to add the multi-language support.</p>

      <ol>
        <li>
          <p>
            {' '}
            <strong>react-i18next</strong>. Now import this package at the top of the file and add the json related to our required languages. Refer the below given code to get more information about it. Create one file inside the src folder, this file will contain the package <strong>react-i18next</strong>. Now import this package at the top of the file and add the json related to our required languages. Refer the below given code to get more information about it.
          </p>
          <p className='warning-block mt-3'>
            {' '}
            <strong>i18n.tsx</strong> as the file name. We recommend that you use the same naming convention.
            <span className='bold'>Tip:</span> We are using the <strong>i18n.tsx</strong> as the file name. We recommend that you use the same naming convention.
          </p>
        </li>
        <CodeShowCaseBox code={codeData.step1} />
        <li>
          <p>
            {' '}
            <strong> Create a JSON</strong> in that file, for providing the corresponding translated word for the english words. Now <strong> Create a JSON</strong> in that file, for providing the corresponding translated word for the english words.
          </p>
        </li>
        <CodeShowCaseBox code={codeData.step2} />
        <li>
          <p>
            {' '}
            <strong>Import the translation files in index.js</strong> and store them in the messages object as shown below.
            <strong>Import the translation files in index.js</strong> and store them in the messages object as shown below.
          </p>
        </li>
        <CodeShowCaseBox code={codeData.step3} />
        <li>
          <p className='inner-sub-title'>Steps to change the Languages: </p>
          <p>
            {' '}
            <strong>react-i18next</strong> package. Create a file <strong>Language.js</strong> and import the <strong>useTranslation</strong> from <strong>react-i18next</strong> package.
          </p>
        </li>
        <CodeShowCaseBox code={codeData.step4} />
        <li>
          <p>In the Language file we are passing the params as same as we have mention in the JSON file. To get more idea about this refer the below code.</p>
        </li>
        <CodeShowCaseBox code={codeData.step5} />
        <li>
          <p>
            {' '}
            <strong>react-i18next</strong>
            Now, where we need to use the changed language, again we need to import the <strong>useTranslation</strong> from <strong>react-i18next</strong>
          </p>
        </li>
        <CodeShowCaseBox code={codeData.step4} />
        <li>
          <p>Now we need to wrap the content to get reflect of languages. Below are the given example.</p>
        </li>
        <CodeShowCaseBox code={codeData.step6} />
      </ol>
      <p className='warning-block mt-3'>
        <span className='bold'>Tip:</span> For more information on react-i18next you can visit the official documentation on
        <a href='https://react.i18next.com/'> react-i18next</a>
      </p>
    </div>
  );
};

export default MultiLanguage;

//  <ol>
//    <li>
//      <p> <strong> main.js</strong> file: */} <strong></strong>
//        {/* Add i18n in the   <strong> main.js</strong> file: */}
//        import i18 and Create JSON in the   <strong></strong>
//      </p>
//      <p>Navigate to main.js file in the src folder and import react-i18next and integrate it with the project using Vue.user(react-i18next )</p>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageImport' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageImport'>
//            import VueI18n from 'react-i18next ';{'\n'}Vue.use(VueI18n);
//          </code>
//        </pre>
//      </div>
//    </li>
//    <li>
//      <p> <strong> Create JSON</strong> files, for providing the corresponding translated word for the english words.
//          <strong> Create JSON</strong> files, for providing the corresponding translated word for the english words.
//      </p>
//      <p>So the JSON file for the spanish language will look something like this:</p>
//      <p> <strong>es.json file</strong>
//          <strong>es.json file</strong>
//      </p>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageIntegration' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageIntegration'>
//            {'{'}
//            {'\n'}
//            {'  '}"Dashboard": "Tablero",{'\n'}
//            {'  '}"Default": "Defecto",{'\n'}
//            {'  '}"E-Commerce":"Comercio electronico",{'\n'}
//            {'  '}"Project":"Proyecto",{'\n'}
//            {'  '}"Project List": "Lista de proyectos"{'\n'}
//            {'}'}
//          </code>
//        </pre>
//      </div>
//      <p> <strong>fr.json file</strong>
//          <strong>fr.json file</strong>
//      </p>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageIntegration' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageIntegration'>
//            {'{'}
//            {'\n'}
//            {'  '}"Dashboard": "Tableau de bord",{'\n'}
//            {'  '}"Default": "Défaut",{'\n'}
//            {'  '}"E-Commerce":"E-Commerce",{'\n'}
//            {'  '}"Project":"Project",{'\n'}
//            {'  '}"Project List": "Liste des projets"{'\n'}
//            {'}'}
//          </code>
//        </pre>
//      </div>
//    </li>
//    <li> <strong> Import the translation files</strong> and store them in the messages object as shown below.
//        <strong> Import the translation files</strong> and store them in the messages object as shown below.
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageInitialization' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageInitialization'>
//            {'  '}import en from './locales/en.json';{'\n'}
//            {'  '}import es from './locales/es.json';{'\n'}
//            {'\n'}
//            {'  '}const messages = {'{'} en: en, es: es {'}'};{'\n'}
//            {'\n'}
//          </code>
//        </pre>
//      </div>
//    </li>
//    <li>
//      Set the selected language in the localStorage:
//      <p>Whenever a language is selected from the dropdown we will set the language code in the localStorage with variable name 'currentLanguage'.</p>
//      <p>We store the selected language code in the variable name locale as shown below.</p>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageInitialization' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageInitialization'>
//            {'\n'}import {'{'} defaultLocale, localeOptions {'}'} from './constants/config';{'\n'}
//            {'\n'}const locale = (localStorage.getItem('currentLanguage') &amp;&amp; localeOptions.filter(x =&gt; x.id === localStorage.getItem('currentLanguage')).length &gt; 0) ? localStorage.getItem('currentLanguage') : defaultLocale; {'}'});
//          </code>
//        </pre>
//      </div>
//      <p>In above assignment , we give the condition that if the currentLanguage in the localStorage matches the list of languages available to us in i18n then we set the stored language or else we store the default language. </p>
//      <p>To know the list of languages available to us in i18n we have imported localeOptions and to know the default language we have imported defaultLocale.</p>
//    </li>
//    <li>
//      <p> <strong> Initialize i18n</strong> and add it as a module while mounting the main component.
//          <strong> Initialize i18n</strong> and add it as a module while mounting the main component.
//      </p>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageInitialization' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageInitialization'>
//            const i18n = new VueI18n({'{'}
//            {'\n'}
//            {'  '}locale: locale,{'\n'}
//            {'  '}fallbackLocale: 'en',{'\n'}
//            {'  '}messages,{'\n'}
//            {'  '}silentTranslationWarn: true{'\n'}
//            {'}'});
//          </code>
//        </pre>
//      </div>
//      <div className='code-box-copy mt-4'>
//        <button className='code-box-copy__btn btn-clipboard' data-clipboard-target='#i18nPackageIntegration' title='Copy'>
//          <i className='fa fa-files-o' />
//        </button>
//        <pre>
//          <code className='language-html' id='i18nPackageIntegration'>
//            new Vue({'{'}
//            {'\n'}
//            {'  '}i18n,{'\n'}
//            {'  '}router,{'\n'}
//            {'  '}store,{'\n'}
//            {'  '}render: h =&gt; h(App){'\n'}
//            {'}'}).$mount('#app');
//          </code>
//        </pre>
//      </div>
//    </li>
//    <li>
//      <p> <strong> implement</strong> it wherever the translation is required.
//        Now that i18n is all setup, we need to   <strong> implement</strong> it wherever the translation is required.
//      </p>
//      <p>
//        To translate a word through i18n we wrap that word in{' '} <strong>
//          <strong>
//          {' '}
//          {'{'}
//          {'{'}$t('Word To Translate Here'){'}'}
//          {'}'}
//        </strong>
//        .
//      </p>
//      <p>
//        Now if you have a variable and the words changes in that variable and you want to translate the words in that variable, simply wrap that variable like this: <strong>
//          <strong>
//          {'{'}
//          {'{'}$t(Variable_here){'}'}
//          {'}'}
//        </strong>
//        . And in your JSON file for translation add translations for all the possible variable values.
//      </p>
//      <p>
//        We have now completed implementing the react-i18next package with our project. If you want you can use it in your entire project by providing the valid json for translation and wrapping all the words in {'{'}
//        {'{'}$t(Value){'}'}
//        {'}'}
//      </p>
//      <p className='success-block mt-3'> <strong>Tip:</strong> For more information on react-i18next you can visit the official documentation on{' '}
//          <strong>Tip:</strong> For more information on react-i18next you can visit the official documentation on{' '}
//        <a
//          href='https://kazupon.github.io/react-i18next
// /started.html#html'
//        >
//          react-i18next
//        </a>
//      </p>
//    </li>
//  </ol>;
