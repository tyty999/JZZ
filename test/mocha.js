﻿var assert = require('assert');
var JZZ = require('..');

describe('MIDI messages', function() {
  it('empty', function() {
    assert.equal(JZZ.MIDI().toString(), 'empty');
  });
  it('noteOn', function() {
    assert.equal(JZZ.MIDI.noteOn(0, 'C6').toString(), '90 48 7f -- Note On');
  });
  it('noteOff', function() {
    assert.equal(JZZ.MIDI.noteOff(0, 'C6').toString(), '80 48 40 -- Note Off');
  });
});

describe('SMF events', function() {
  it('smfEndOfTrack', function() {
    assert.equal(JZZ.MIDI.smfEndOfTrack().toString(), 'smf ff 2f -- End of Track');
  });
});

describe('JZZ.lib', function() {
  it('toBase64', function() {
    assert.equal(JZZ.lib.toBase64('MIDI'), 'TUlESQ==');
  });
  it('fromBase64', function() {
    assert.equal(JZZ.lib.fromBase64('TUlESQ=='), 'MIDI');
  });
  it('toUTF8', function() {
    assert.equal(JZZ.lib.toUTF8('МИДИ'), '\xD0\x9C\xD0\x98\xD0\x94\xD0\x98');
    assert.equal(JZZ.lib.toUTF8('音樂'), '\xE9\x9F\xB3\xE6\xA8\x82');
  });
});