(function (_0x5c552b, _0x5717a8) {
  const _0x16a164 = _0x26ec,
    _0x5dfde0 = _0x5c552b();
  while (!![]) {
    try {
      const _0x1b1694 =
        parseInt(_0x16a164(0x1fb)) / 0x1 +
        (parseInt(_0x16a164(0x1ed)) / 0x2) *
          (parseInt(_0x16a164(0x1f7)) / 0x3) +
        (parseInt(_0x16a164(0x1f9)) / 0x4) *
          (-parseInt(_0x16a164(0x1ee)) / 0x5) +
        -parseInt(_0x16a164(0x1ea)) / 0x6 +
        parseInt(_0x16a164(0x1ef)) / 0x7 +
        parseInt(_0x16a164(0x1fa)) / 0x8 +
        -parseInt(_0x16a164(0x1f3)) / 0x9;
      if (_0x1b1694 === _0x5717a8) break;
      else _0x5dfde0["push"](_0x5dfde0["shift"]());
    } catch (_0x97ce01) {
      _0x5dfde0["push"](_0x5dfde0["shift"]());
    }
  }
})(_0x35d9, 0xce295);
import _0x5a0a30 from "axios";
import { BaseUrl } from "../userPK.js";
function _0x26ec(_0x1b0122, _0x350bb2) {
  const _0x35d909 = _0x35d9();
  return (
    (_0x26ec = function (_0x26ec78, _0x5f2f0e) {
      _0x26ec78 = _0x26ec78 - 0x1ea;
      let _0x5d692c = _0x35d909[_0x26ec78];
      return _0x5d692c;
    }),
    _0x26ec(_0x1b0122, _0x350bb2)
  );
}
import _0x5a62a6 from "chalk";
export async function SuggestedFollows(_0x38ecf1) {
  const _0x5f2678 = _0x26ec,
    _0x52ff79 = await _0x5a0a30["get"](
      BaseUrl + _0x5f2678(0x1fc) + _0x38ecf1 + _0x5f2678(0x1f4)
    ),
    _0x3d15ec = _0x52ff79[_0x5f2678(0x1f5)][_0x5f2678(0x1eb)][_0x5f2678(0x1ec)][
      _0x5f2678(0x1f1)
    ]((_0x1471ba, _0x4991d9) => ({
      username: _0x1471ba[_0x5f2678(0x1f8)],
      nama: _0x1471ba["displayName"],
      fid: _0x1471ba[_0x5f2678(0x1f0)],
    }));
  return (
    console["log"](_0x5a62a6[_0x5f2678(0x1f2)](_0x5f2678(0x1f6))), _0x3d15ec
  );
}
function _0x35d9() {
  const _0x561df6 = [
    "910221LBhJrE",
    "suggested-users?limit=",
    "5073702GCrcBT",
    "result",
    "users",
    "5674uyhkmV",
    "5WMWahw",
    "2022965NwvbHy",
    "fid",
    "map",
    "yellowBright",
    "8394930kSkgVE",
    "&randomized=true",
    "data",
    "Loading\x20Data...",
    "1125oSsGak",
    "username",
    "1941124aeYUdz",
    "6760112VVMZOj",
  ];
  _0x35d9 = function () {
    return _0x561df6;
  };
  return _0x35d9();
}
