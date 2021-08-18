/* Les étapes pour executer la compilation automatique jsx vers js
1- installer les modules : (@babel/cli, @babel/core, @babel/preset-env, @babel/preset-react)
2- ajouter ("watch": "babel src --out-dir js --watch --verbose",) dans package.json
3- Créer le fichier .babelrc dans le dossier src et implémenter les presets de babel
4- lancer la commande "npm run watch"
5- Ajouter les liens Polyfill dans indexedDB.html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
*/
/* 

 */
class ReactHeader extends React.Component {
    render(){
        return(
            <div>This is a placeholder for Header</div>
        );
    }
}
class ReactBody extends React.Component {
    render(){
        return(
            <div>This is a placeholder for Body</div>
        );
    }
}
class ReactFooter extends React.Component {
    render(){
        return(
            <div>This is a placeholder for Footer</div>
        );
    }
}
class ReactRoot extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ReactHeader/>
                <ReactBody/>
                <ReactFooter/>
            </React.Fragment>
        );
    }
}

const element = <ReactRoot/>

ReactDOM.render(element, document.getElementById('root'));

console.log('ok jsx to js run with aut