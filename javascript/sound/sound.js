function ArcadeAudio() {
  this.sounds = {}
}

ArcadeAudio.prototype.add = function( key, count, settings ) {
  this.sounds[ key ] = []
  settings.forEach( function( elem, index ) {
    this.sounds[ key ].push( {
      tick: 0,
      count: count,
      pool: []
    } )
    for( var i = 0; i < count; i++ ) {
      var audio = new Audio()
      audio.src = jsfxr( elem )
      this.sounds[ key ][ index ].pool.push( audio )
    }
  }, this )
};

ArcadeAudio.prototype.play = function( key ) {
  var sound = this.sounds[ key ]
  var soundData = sound.length > 1 ? sound[ Math.floor( Math.random() * sound.length ) ] : sound[ 0 ]
  soundData.pool[ soundData.tick ].play()
  soundData.tick < soundData.count - 1 ? soundData.tick++ : soundData.tick = 0
}

var sound = new ArcadeAudio()

sound.add( 'enemy collision', 2,
  [
    [0,,0.01,,0.4384,0.2,,0.12,0.28,1,0.65,,,0.0419,,,,,1,,,,,0.7],
    [0,,0.16,0.18,0.18,0.47,0.0084,-0.26,,,,,,0.74,-1,,-0.76,,1,,,,,0.7],
    [3,0.416,0.01,0.0007,0.7888,0.2095,,-0.4258,0.3622,0.0059,0.974,-0.6585,0.9994,,0.0026,0.8715,-0.5074,0.0024,0.6412,0.0723,0.9087,0.0028,,0.7]

    
  ]
)

sound.add( 'jump', 2,
  [
    [0,,0.2924,,0.293,0.4953,,0.186,,,,,,0.4419,,,,,1,,,,,0.5],
    [0,,0.3207,,0.2198,0.3493,,0.1111,,,,,,0.1762,,,,,0.7561,,,0.0578,,0.5],
    [0,,0.201,,0.1722,0.4551,,0.1751,,,,,,0.5608,,,,,0.7395,,,,,0.5],
    [0,,0.115,,0.1937,0.4699,,0.2536,,,,,,0.0368,,,,,1,,,0.2923,,0.5]
  ]
)

sound.add( 'damage', 2,
  [
    [3,0.0014,0.4585,0.4709,0.9125,0.5115,,0.0034,0.0032,0.2743,0.2059,0.4905,0.9914,0.1378,-0.8535,0.8741,-0.9957,0.8661,0.7004,0.1646,0.0784,0.0294,-0.0086,0.7],
    [3,,0.0138,,0.2701,0.4935,,-0.6881,,,,,,,,,,,1,,,,,0.7],
    [0,,0.0639,,0.2425,0.7582,,-0.6217,,,,,,0.4039,,,,,1,,,,,0.7],
    [3,,0.0948,,0.2116,0.7188,,-0.6372,,,,,,,,,,,1,,,0.2236,,0.25],
    [3,,0.1606,0.5988,0.2957,0.1157,,-0.3921,,,,,,,,,0.3225,-0.2522,1,,,,,0.7],
    [3,0.416,0.01,0.0007,0.7888,0.2095,,-0.4258,0.3622,0.0059,0.974,-0.6585,0.9994,,0.0026,0.8715,-0.5074,0.0024,0.6412,0.0723,0.9087,0.0028,,0.7]
  ]
)

sound.add('burn', 2, [
    [3,0.416,0.01,0.0007,0.7888,0.2095,,-0.4258,0.3622,0.0059,0.974,-0.6585,0.9994,,0.0026,0.8715,-0.5074,0.0024,0.6412,0.0723,0.9087,0.0028,,0.7]
])


sound.add('lvl', 2, [
    [1,0.9876,0.6664,0.2142,0.8339,0.5548,,-0.3651,-0.068,-0.4612,-0.6212,0.0553,0.2654,0.6906,0.0047,0.7033,,-0.3417,0.9778,0.084,-0.6355,0.4507,,0.7]
])

sound.add('revive',2,[
    [0,0.2138,0.3716,0.0005,0.7417,0.5986,,-0.3799,-0.6957,-0.0543,,0.3396,0.2935,0.261,-0.3713,0.6473,-0.0169,0.0024,0.2597,0.1164,0.2496,0.4791,,0.7],
    [0,0.4579,0.064,0.025,0.0224,0.1467,,0.2338,0.0064,0.0304,,-0.6727,,0.1385,-0.7814,-0.7199,-0.0037,-0.0489,0.9918,0.0266,,0.0364,0.0371,0.7],
    [2,0.24,0.254,0.1162,0.3272,0.3786,,0.0087,0.2178,0.9537,0.7424,-0.0406,-0.172,,,,-0.5926,0.8116,0.9999,0.1757,0.4642,0.0932,-0.0447,0.7]
])