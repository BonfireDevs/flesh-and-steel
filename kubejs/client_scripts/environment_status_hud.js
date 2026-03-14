// Client-side environment status HUD for Flesh & Steel
// Optimized for independent Temperature and Radiation tracking.

let fs_env_status = {
    text: '',
    color: 0xffffff,
};

ClientEvents.tick(event => {
    const player = event.player;
    if (!player) return;

    const level = player.level;
    if (!level) return;

    let pos = player.blockPosition();
    let biome = level.getBiome(pos).value();
    let temp = biome.getTemperature();

    // 1. Temperature Parsing
    let tempBand = 'Mild';
    let tempColor = '§f'; // White
    if (temp <= 0.15) { tempBand = 'Very Cold'; tempColor = '§b'; }
    else if (temp <= 0.4) { tempBand = 'Cold'; tempColor = '§9'; }
    else if (temp <= 0.8) { tempBand = 'Warm'; tempColor = '§e'; }
    else { tempBand = 'Hot'; tempColor = '§c'; }

    // 2. Radiation Parsing (Machine + Biome)
    const effectMap = player.activeEffects;
    let radiationInst = null;
    effectMap.forEach((instance, effect) => {
        if (effect.registryName && effect.registryName.toString() === 'radiach:radiation') {
            radiationInst = instance;
        }
    });

    let radBand = 'None';
    let radColor = '§a'; // Green
    if (radiationInst) {
        const amp = radiationInst.amplifier;
        if (amp <= 0) { radBand = 'Low'; radColor = '§e'; }
        else if (amp <= 2) { radBand = 'Medium'; radColor = '§6'; }
        else { radBand = 'High'; radColor = '§4'; }
    }

    // 3. Hazard Detection
    let dangerType = '';
    if (tempBand == 'Very Cold') dangerType = ' §b| FROST';
    if (radBand == 'High') dangerType = ' §4| LETHAL RAD';
    if (radBand == 'None' && tempBand == 'Mild') dangerType = ' §2| SAFE';

    let tempText = `§7Temp: ${tempColor}${tempBand}`;
    let radText = `§7Rad: ${radColor}${radBand}`;

    fs_env_status.text = `${tempText}   ${radText}${dangerType}`;
});

RenderEvents.overlay(event => {
    const mc = event.minecraft;
    const gui = event.getGuiGraphics();
    const font = mc.font;

    if (!fs_env_status.text) return;

    const x = 5;
    const y = 5;
    gui.drawString(font, fs_env_status.text, x, y, 0xFFFFFF, true);
});
