(function (_0x5775f5, _0x19062b) {
  const _0x5c05bb = _0x452b,
    _0x2dc746 = _0x5775f5();
  while (!![]) {
    try {
      const _0x3d54be =
        (parseInt(_0x5c05bb(0xa9)) / 0x1) * (-parseInt(_0x5c05bb(0xa3)) / 0x2) +
        (parseInt(_0x5c05bb(0x9b)) / 0x3) * (parseInt(_0x5c05bb(0x99)) / 0x4) +
        (parseInt(_0x5c05bb(0xb0)) / 0x5) * (-parseInt(_0x5c05bb(0xa1)) / 0x6) +
        (-parseInt(_0x5c05bb(0xa8)) / 0x7) * (parseInt(_0x5c05bb(0xa5)) / 0x8) +
        (-parseInt(_0x5c05bb(0xa2)) / 0x9) *
          (-parseInt(_0x5c05bb(0xad)) / 0xa) +
        -parseInt(_0x5c05bb(0xa4)) / 0xb +
        parseInt(_0x5c05bb(0x9c)) / 0xc;
      if (_0x3d54be === _0x19062b) break;
      else _0x2dc746["push"](_0x2dc746["shift"]());
    } catch (_0x2e3a9d) {
      _0x2dc746["push"](_0x2dc746["shift"]());
    }
  }
})(_0x20a7, 0xaf17d);
import _0x22afad from "axios";
function _0x452b(_0x374a0e, _0x150565) {
  const _0x20a79d = _0x20a7();
  return (
    (_0x452b = function (_0x452bba, _0x11b595) {
      _0x452bba = _0x452bba - 0x98;
      let _0x1ed72d = _0x20a79d[_0x452bba];
      return _0x1ed72d;
    }),
    _0x452b(_0x374a0e, _0x150565)
  );
}
export async function cekValidasi(_0x4d9e64) {
  const _0x2606d7 = _0x452b;
  try {
    const _0x23197b = { headers: { Authorization: _0x2606d7(0xaa) } },
      _0x3fd768 = await _0x22afad[_0x2606d7(0xa6)](_0x2606d7(0xac), _0x23197b),
      _0x4c12b3 = await _0x22afad["get"](
        "https://api.github.com/repos/mhrdwan/Bot-Follow-Warpcast/stargazers",
        _0x23197b
      ),
      _0x5b37e3 = _0x3fd768["data"][_0x2606d7(0xaf)](
        (_0x55638c) => _0x55638c[_0x2606d7(0x98)]
      ),
      _0x376ea7 = _0x4c12b3["data"][_0x2606d7(0xaf)](
        (_0x41f817) => _0x41f817["login"]
      ),
      _0x2b647e = _0x376ea7[_0x2606d7(0xab)](_0x4d9e64),
      _0x58adb1 = _0x5b37e3[_0x2606d7(0xab)](_0x4d9e64);
    let _0x1acaf4 = "";
    if (_0x58adb1 && _0x2b647e) return _0x2606d7(0x9e);
    else {
      if (!_0x58adb1 && _0x2b647e) _0x1acaf4 = _0x2606d7(0x9d);
      else
        !_0x2b647e && _0x58adb1
          ? (_0x1acaf4 = _0x2606d7(0x9a))
          : (_0x1acaf4 = _0x2606d7(0xae));
    }
    return _0x1acaf4;
  } catch (_0x33d9e5) {
    console[_0x2606d7(0x9f)](
      _0x33d9e5[_0x2606d7(0xa7)]
        ? _0x33d9e5["response"][_0x2606d7(0xa0)][_0x2606d7(0xb1)]
        : _0x33d9e5[_0x2606d7(0xb1)]
    );
    throw _0x33d9e5;
  }
}
function _0x20a7() {
  const _0x7552c0 = [
    "message",
    "login",
    "176DfendM",
    "[❗]\x20You\x20must\x20star\x20my\x20repo\x20first:\x20https://github.com/mhrdwan/Bot-Follow-Warpcast",
    "90213zfJdxj",
    "18243600xPkVdX",
    "[❗]\x20You\x20must\x20follow\x20my\x20GitHub\x20first:\x20https://github.com/mhrdwan",
    "[✅]\x20Thanks\x20for\x20following\x20and\x20starring\x20:)",
    "error",
    "data",
    "6YfEmpt",
    "3609JNDuKP",
    "2UvfCJH",
    "1123958ffXwzV",
    "8QObZxq",
    "get",
    "response",
    "2166661CecfKx",
    "965483Yvgcjr",
    "\x20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",
    "includes",
    "https://api.github.com/users/mhrdwan/followers",
    "50TIXIVr",
    "[❗]\x20You\x20must\x20follow\x20https://github.com/mhrdwan\x20and\x20Star\x20my\x20repo\x20first:\x20https://github.com/mhrdwan/Bot-Follow-Warpcast\x20:)",
    "map",
    "3755320Uhxrgy",
  ];
  _0x20a7 = function () {
    return _0x7552c0;
  };
  return _0x20a7();
}
