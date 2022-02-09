const Page = require('./page')
class DigiPage extends Page{
    get politica(){
        return $('.container .flex .nav .nav-list-item:nth-child(1) a')
    }
    get magazin(){
        return $('.container .flex .nav .nav-list-item [title="Magazin"]')
    }

   get articol(){
        return $('.container .flex .col-8 .article.article-alt:nth-child(3) .article-title [title = "VIDEO. Momentul în care un câine intră pe pista de alergare și câștigă un concurs de atletism"]')  }
  
    get maiMulte(){
        return $('.container .flex .nav .nav-list-item-link.nav-trigger')
    }

    get educatie(){
        return $('.container .nav-menu-list .nav-submenu [title = "Educație"]')
    }
    open(){
        return super.open();
    }
}
module.exports= new DigiPage();