export class App {
    configureRouter(config, router) {
        config.title = 'Star Wars';

        config.map([
            { route: ['', 'films'], name: 'films', moduleId: 'films/films', nav: true, title: 'Films' }
        ]);
        
        this.router = router;
    }
}