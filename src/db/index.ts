export default {
    connect(url: string) {
        console.log('connect: ', url);
    },
    options(options: object) {
        console.log('set config');
    }
};
