const cfonts = require('cfonts');
client.on("ready", () => {
    const banner = cfonts.render((`Ready!`), {
        font: 'block',
        color: 'candy',
        align: 'left',
        gradient: ["red","magenta"],
        lineHeight: 3
    });
    console.log(banner.string)
});
