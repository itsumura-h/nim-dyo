/* Generated by the Nim Compiler v1.0.4 */
/*   (c) 2019 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI3662 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3650 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3642 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3646 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI21156 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI3608 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3714 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI114 = {size: 0,kind: 40,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3708 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3626 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3628 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3658 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI3658 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3658.node = NNI3658;
var NNI3628 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3628.node = NNI3628;
NTI3708.base = NTI3626;
NTI3714.base = NTI3626;
var NNI3626 = {kind: 2, len: 6, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3708, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}, 
{kind: 1, offset: "raiseId", len: 0, typ: NTI114, name: "raiseId", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI3714, name: "up", sons: null}]};
NTI3626.node = NNI3626;
var NNI3608 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3608.node = NNI3608;
NTI3626.base = NTI3608;
NTI3628.base = NTI3626;
NTI3658.base = NTI3628;
var NNI21156 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI140, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI104, name: "Field1", sons: null}]};
NTI21156.node = NNI21156;
var NNI3646 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3646.node = NNI3646;
var NNI3642 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3642.node = NNI3642;
NTI3642.base = NTI3628;
NTI3646.base = NTI3642;
var NNI3650 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3650.node = NNI3650;
NTI3650.base = NTI3628;
var NNI3662 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3662.node = NNI3662;
NTI3662.base = NTI3628;

function toJSStr(s_23304) {
										var Tmp5;
						var Tmp7;

	var result_23305 = null;

		var res_23363 = new_seq_23336((s_23304 != null ? s_23304.length : 0));
		var i_23365 = 0;
		var j_23367 = 0;
		L1: do {
				L2: while (true) {
				if (!(i_23365 < (s_23304 != null ? s_23304.length : 0))) break L2;
					var c_23368 = s_23304[i_23365];
					if ((c_23368 < 128)) {
					res_23363[j_23367] = String.fromCharCode(c_23368);
					i_23365 += 1;
					}
					else {
						var helper_23391 = new_seq_23336(0);
						L3: do {
								L4: while (true) {
								if (!true) break L4;
									var code_23392 = c_23368.toString(16);
									if (((code_23392 != null ? code_23392.length : 0) == 1)) {
									if (helper_23391 != null) { helper_23391.push("%0"); } else { helper_23391 = ["%0"]; };
									}
									else {
									if (helper_23391 != null) { helper_23391.push("%"); } else { helper_23391 = ["%"]; };
									}
									
									if (helper_23391 != null) { helper_23391.push(code_23392); } else { helper_23391 = [code_23392]; };
									i_23365 += 1;
										if (((s_23304 != null ? s_23304.length : 0) <= i_23365)) Tmp5 = true; else {											Tmp5 = (s_23304[i_23365] < 128);										}									if (Tmp5) {
									break L3;
									}
									
									c_23368 = s_23304[i_23365];
								}
						} while(false);
++excHandler;
						Tmp7 = framePtr;
						try {
						res_23363[j_23367] = decodeURIComponent(helper_23391.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
						framePtr = Tmp7;
						res_23363[j_23367] = helper_23391.join("");
						lastJSError = prevJSError;
						} finally {
						framePtr = Tmp7;
						}
					}
					
					j_23367 += 1;
				}
		} while(false);
		if (res_23363 === null) res_23363 = [];
               if (res_23363.length < j_23367) { for (var i=res_23363.length;i<j_23367;++i) res_23363.push(null); }
               else { res_23363.length = j_23367; };
		result_23305 = res_23363.join("");

	return result_23305;

}

function rawEcho() {
		      var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

	
}

function makeNimstrLit(c_23270) {
		  var ln = c_23270.length;
  var result = new Array(ln);
  for (var i = 0; i < ln; ++i) {
    result[i] = c_23270.charCodeAt(i);
  }
  return result;
  

	
}

function setConstr() {
		    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_24827, src_24828, ti_24829) {
	var result_25019 = null;

		switch (ti_24829.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(is_fat_pointer_24801(ti_24829))) {
			result_25019 = src_24828;
			}
			else {
				result_25019 = [src_24828[0], src_24828[1]];
			}
			
			break;
		case 19:
			      if (dest_24827 === null || dest_24827 === undefined) {
        dest_24827 = {};
      }
      else {
        for (var key in dest_24827) { delete dest_24827[key]; }
      }
      for (var key in src_24828) { dest_24827[key] = src_24828[key]; }
      result_25019 = dest_24827;
    
			break;
		case 18:
		case 17:
			if (!((ti_24829.base == null))) {
			result_25019 = nimCopy(dest_24827, src_24828, ti_24829.base);
			}
			else {
			if ((ti_24829.kind == 17)) {
			result_25019 = (dest_24827 === null || dest_24827 === undefined) ? {m_type: ti_24829} : dest_24827;
			}
			else {
				result_25019 = (dest_24827 === null || dest_24827 === undefined) ? {} : dest_24827;
			}
			}
			nimCopyAux(result_25019, src_24828, ti_24829.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_24828 === null) {
        result_25019 = null;
      }
      else {
        if (dest_24827 === null || dest_24827 === undefined) {
          dest_24827 = new Array(src_24828.length);
        }
        else {
          dest_24827.length = src_24828.length;
        }
        result_25019 = dest_24827;
        for (var i = 0; i < src_24828.length; ++i) {
          result_25019[i] = nimCopy(result_25019[i], src_24828[i], ti_24829.base);
        }
      }
    
			break;
		case 28:
			      if (src_24828 !== null) {
        result_25019 = src_24828.slice(0);
      }
    
			break;
		default: 
			result_25019 = src_24828;
			break;
		}

	return result_25019;

}

function cstrToNimstr(c_23287) {
		  var ln = c_23287.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_23287.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_23287.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

	
}

function arrayConstr(len_25086, value_25087, typ_25088) {
		    var result = new Array(len_25086);
    for (var i = 0; i < len_25086; ++i) result[i] = nimCopy(null, value_25087, typ_25088);
    return result;
  

	
}

function raiseException(e_21618, ename_21619) {
		e_21618.name = ename_21619;
		if ((excHandler == 0)) {
		unhandledException(e_21618);
		}
		
		e_21618.trace = nimCopy(null, raw_write_stack_trace_21468(), NTI138);
		throw e_21618;

	
}

function chckIndx(i_25105, a_25106, b_25107) {
			var Tmp1;

	var result_25108 = 0;

	BeforeRet: do {
			if (!(a_25106 <= i_25105)) Tmp1 = false; else {				Tmp1 = (i_25105 <= b_25107);			}		if (Tmp1) {
		result_25108 = i_25105;
		break BeforeRet;
		}
		else {
		raiseIndexError(i_25105, a_25106, b_25107);
		}
		
	} while (false);

	return result_25108;

}

function addChar(x_25311, c_25312) {
		x_25311.push(c_25312);

	
}

function addInt(a_23803, b_23804) {
		    var result = a_23803 + b_23804;
    if (result > 2147483647 || result < -2147483648) raiseOverflow();
    return result;
  

	
}

function nimBoolToStr(x_21045) {
	var result_21046 = null;

		if (x_21045) {
		result_21046 = nimCopy(null, makeNimstrLit("true"), NTI138);
		}
		else {
			result_21046 = nimCopy(null, makeNimstrLit("false"), NTI138);
		}
		

	return result_21046;

}

function chckRange(i_25124, a_25125, b_25126) {
			var Tmp1;

	var result_25127 = 0;

	BeforeRet: do {
			if (!(a_25125 <= i_25124)) Tmp1 = false; else {				Tmp1 = (i_25124 <= b_25126);			}		if (Tmp1) {
		result_25127 = i_25124;
		break BeforeRet;
		}
		else {
		raiseRangeError();
		}
		
	} while (false);

	return result_25127;

}
var nim_program_result = 0;
var global_raise_hook_18618 = [null];
var local_raise_hook_18623 = [null];
var out_of_mem_hook_18626 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }
var lc_50207 = [{}];
var object_id_53237 = [0];

function new_seq_23336(len_23339) {
	var result_23341 = null;

	var F={procname:"newSeq.newSeq",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 997;
		result_23341 = new Array(len_23339); for (var i=0;i<len_23339;++i) {result_23341[i]=null;}	framePtr = F.prev;

	return result_23341;

}

function is_fat_pointer_24801(ti_24803) {
	var result_24804 = false;

	BeforeRet: do {
		result_24804 = !((ConstSet1[ti_24803.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_24804;

}

function nimCopyAux(dest_24832, src_24833, n_24835) {
		switch (n_24835.kind) {
		case 0:
			break;
		case 1:
			      dest_24832[n_24835.offset] = nimCopy(dest_24832[n_24835.offset], src_24833[n_24835.offset], n_24835.typ);
    
			break;
		case 2:
			    for (var i = 0; i < n_24835.sons.length; i++) {
      nimCopyAux(dest_24832, src_24833, n_24835.sons[i]);
    }
    
			break;
		case 3:
			      dest_24832[n_24835.offset] = nimCopy(dest_24832[n_24835.offset], src_24833[n_24835.offset], n_24835.typ);
      for (var i = 0; i < n_24835.sons.length; ++i) {
        nimCopyAux(dest_24832, src_24833, n_24835.sons[i][1]);
      }
    
			break;
		}

	
}

function add_18638(x_18641, x_18641_Idx, y_18642) {
		      if (x_18641[x_18641_Idx] === null) { x_18641[x_18641_Idx] = []; }
      var off = x_18641[x_18641_Idx].length;
      x_18641[x_18641_Idx].length += y_18642.length;
      for (var i = 0; i < y_18642.length; ++i) {
        x_18641[x_18641_Idx][off+i] = y_18642.charCodeAt(i);
      }
    

	
}

function aux_write_stack_trace_21151(f_21153) {
					var Tmp3;

	var result_21154 = [null];

		var it_21162 = f_21153;
		var i_21164 = 0;
		var total_21166 = 0;
		var temp_frames_21173 = arrayConstr(64, {Field0: null, Field1: 0}, NTI21156);
		L1: do {
				L2: while (true) {
					if (!!((it_21162 == null))) Tmp3 = false; else {						Tmp3 = (i_21164 <= 63);					}				if (!Tmp3) break L2;
					temp_frames_21173[i_21164].Field0 = it_21162.procname;
					temp_frames_21173[i_21164].Field1 = it_21162.line;
					i_21164 += 1;
					total_21166 += 1;
					it_21162 = it_21162.prev;
				}
		} while(false);
		L4: do {
				L5: while (true) {
				if (!!((it_21162 == null))) break L5;
					total_21166 += 1;
					it_21162 = it_21162.prev;
				}
		} while(false);
		result_21154[0] = nimCopy(null, [], NTI138);
		if (!((total_21166 == i_21164))) {
		if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(makeNimstrLit("(")); } else { result_21154[0] = makeNimstrLit("("); };
		if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(cstrToNimstr(((total_21166 - i_21164))+"")); } else { result_21154[0] = cstrToNimstr(((total_21166 - i_21164))+"").slice(); };
		if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_21154[0] = makeNimstrLit(" calls omitted) ...\x0A"); };
		}
		
		L6: do {
			var j_21421 = 0;
			var colontmp__225094 = 0;
			colontmp__225094 = (i_21164 - 1);
			var res_225099 = colontmp__225094;
			L7: do {
					L8: while (true) {
					if (!(0 <= res_225099)) break L8;
						j_21421 = res_225099;
						add_18638(result_21154, 0, temp_frames_21173[j_21421].Field0);
						if ((0 < temp_frames_21173[j_21421].Field1)) {
						if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(makeNimstrLit(", line: ")); } else { result_21154[0] = makeNimstrLit(", line: "); };
						if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(cstrToNimstr((temp_frames_21173[j_21421].Field1)+"")); } else { result_21154[0] = cstrToNimstr((temp_frames_21173[j_21421].Field1)+"").slice(); };
						}
						
						if (result_21154[0] != null) { result_21154[0] = (result_21154[0]).concat(makeNimstrLit("\x0A")); } else { result_21154[0] = makeNimstrLit("\x0A"); };
						res_225099 -= 1;
					}
			} while(false);
		} while(false);

	return result_21154[0];

}

function raw_write_stack_trace_21468() {
	var result_21470 = null;

		if (!((framePtr == null))) {
		result_21470 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(aux_write_stack_trace_21151(framePtr) || []), NTI138);
		}
		else {
			result_21470 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI138);
		}
		

	return result_21470;

}

function unhandledException(e_21529) {
		var buf_21530 = [[]];
		if (!(((e_21529.message != null ? e_21529.message.length : 0) == 0))) {
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_21530[0] = makeNimstrLit("Error: unhandled exception: "); };
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(e_21529.message); } else { buf_21530[0] = e_21529.message.slice(); };
		}
		else {
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_21530[0] = makeNimstrLit("Error: unhandled exception"); };
		}
		
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(makeNimstrLit(" [")); } else { buf_21530[0] = makeNimstrLit(" ["); };
		add_18638(buf_21530, 0, e_21529.name);
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(makeNimstrLit("]\x0A")); } else { buf_21530[0] = makeNimstrLit("]\x0A"); };
		if (buf_21530[0] != null) { buf_21530[0] = (buf_21530[0]).concat(raw_write_stack_trace_21468()); } else { buf_21530[0] = raw_write_stack_trace_21468().slice(); };
		var cbuf_21601 = toJSStr(buf_21530[0]);
		framePtr = null;
		  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_21601);
  }
  else {
    throw cbuf_21601;
  }
  

	
}

function raiseIndexError(i_22655, a_22656, b_22657) {
		var Tmp1;

		var eHEX60gensym22802_23003 = null;
		eHEX60gensym22802_23003 = {m_type: NTI3658, parent: null, name: null, message: null, trace: null, raiseId: 0, up: null};
		if ((b_22657 < a_22656)) {
		Tmp1 = makeNimstrLit("index out of bounds, the container is empty");
		}
		else {
		Tmp1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_22655)+"") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_22656)+"") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_22657)+"") || []);
		}
		
		eHEX60gensym22802_23003.message = nimCopy(null, Tmp1, NTI138);
		eHEX60gensym22802_23003.parent = null;
		raiseException(eHEX60gensym22802_23003, "IndexError");

	
}

function add_escaped_char_28814(s_28817, s_28817_Idx, c_28818) {
	var F={procname:"system.addEscapedChar",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4271;
		switch (c_28818) {
		case 7:
			F.line = 4272;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\a")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\a"); };
			break;
		case 8:
			F.line = 4273;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\b")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\b"); };
			break;
		case 9:
			F.line = 4274;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\t")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\t"); };
			break;
		case 10:
			F.line = 4275;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\n")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\n"); };
			break;
		case 11:
			F.line = 4276;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\v")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\v"); };
			break;
		case 12:
			F.line = 4277;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\f")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\f"); };
			break;
		case 13:
			F.line = 4278;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\c")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\c"); };
			break;
		case 27:
			F.line = 4279;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\e")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\e"); };
			break;
		case 92:
			F.line = 4280;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\\\")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\\\"); };
			break;
		case 39:
			F.line = 4281;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\\'")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\\'"); };
			break;
		case 34:
			F.line = 4282;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\\"")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\\""); };
			break;
		case 32:
		case 33:
		case 35:
		case 36:
		case 37:
		case 38:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 77:
		case 78:
		case 79:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		case 91:
		case 93:
		case 94:
		case 95:
		case 96:
		case 97:
		case 98:
		case 99:
		case 100:
		case 101:
		case 102:
		case 103:
		case 104:
		case 105:
		case 106:
		case 107:
		case 108:
		case 109:
		case 110:
		case 111:
		case 112:
		case 113:
		case 114:
		case 115:
		case 116:
		case 117:
		case 118:
		case 119:
		case 120:
		case 121:
		case 122:
		case 123:
		case 124:
		case 125:
		case 126:
			F.line = 4283;
			if (s_28817[s_28817_Idx] != null) { addChar(s_28817[s_28817_Idx], c_28818); } else { s_28817[s_28817_Idx] = [c_28818]; };
			break;
		default: 
			F.line = 4285;
			if (s_28817[s_28817_Idx] != null) { s_28817[s_28817_Idx] = (s_28817[s_28817_Idx]).concat(makeNimstrLit("\\x")); } else { s_28817[s_28817_Idx] = makeNimstrLit("\\x"); };
			F.line = 4287;
			var n_28834 = c_28818;
			F.line = 4288;
			if (s_28817[s_28817_Idx] != null) { addChar(s_28817[s_28817_Idx], makeNimstrLit("0123456789ABCDEF")[chckIndx(((n_28834 & 240) >> 4), 0, (makeNimstrLit("0123456789ABCDEF") != null ? makeNimstrLit("0123456789ABCDEF").length : 0)+0-1)-0]); } else { s_28817[s_28817_Idx] = [makeNimstrLit("0123456789ABCDEF")[chckIndx(((n_28834 & 240) >> 4), 0, (makeNimstrLit("0123456789ABCDEF") != null ? makeNimstrLit("0123456789ABCDEF").length : 0)+0-1)-0]]; };
			F.line = 4289;
			if (s_28817[s_28817_Idx] != null) { addChar(s_28817[s_28817_Idx], makeNimstrLit("0123456789ABCDEF")[chckIndx((n_28834 & 15), 0, (makeNimstrLit("0123456789ABCDEF") != null ? makeNimstrLit("0123456789ABCDEF").length : 0)+0-1)-0]); } else { s_28817[s_28817_Idx] = [makeNimstrLit("0123456789ABCDEF")[chckIndx((n_28834 & 15), 0, (makeNimstrLit("0123456789ABCDEF") != null ? makeNimstrLit("0123456789ABCDEF").length : 0)+0-1)-0]]; };
			break;
		}
	framePtr = F.prev;

	
}

function raiseOverflow() {
		var eHEX60gensym22058_22203 = null;
		eHEX60gensym22058_22203 = {m_type: NTI3646, parent: null, name: null, message: null, trace: null, raiseId: 0, up: null};
		eHEX60gensym22058_22203.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI138);
		eHEX60gensym22058_22203.parent = null;
		raiseException(eHEX60gensym22058_22203, "OverflowError");

	
}

function sys_fatal_15062(message_15066) {
	var F={procname:"sysFatal.sysFatal",prev:framePtr,filename:"fatal.nim",line:0};
	framePtr = F;
		F.line = 34;
		var e_15203 = null;
		F.line = 37;
		e_15203 = {m_type: NTI3650, parent: null, name: null, message: null, trace: null, raiseId: 0, up: null};
		F.line = 38;
		e_15203.message = nimCopy(null, message_15066, NTI138);
		F.line = 39;
		raiseException(e_15203, "AssertionError");
	framePtr = F.prev;

	
}

function raise_assert_15058(msg_15060) {
	var F={procname:"assertions.raiseAssert",prev:framePtr,filename:"assertions.nim",line:0};
	framePtr = F;
		F.line = 20;
		sys_fatal_15062(msg_15060);
	framePtr = F.prev;

	
}

function failed_assert_impl_15266(msg_15268) {
	var F={procname:"assertions.failedAssertImpl",prev:framePtr,filename:"assertions.nim",line:0};
	framePtr = F;
		F.line = 27;
		raise_assert_15058(msg_15268);
	framePtr = F.prev;

	
}

function add_quoted_220801(s_220804, s_220804_Idx, x_220805) {
	var F={procname:"addQuoted.addQuoted",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4316;
		if (s_220804[s_220804_Idx] != null) { s_220804[s_220804_Idx] = (s_220804[s_220804_Idx]).concat(makeNimstrLit("\"")); } else { s_220804[s_220804_Idx] = makeNimstrLit("\""); };
		L1: do {
			F.line = 4317;
			var c_221002 = 0;
			F.line = 202;
			var i_225080 = 0;
			F.line = 203;
			var l_225081 = (x_220805 != null ? x_220805.length : 0);
			L2: do {
				F.line = 204;
					L3: while (true) {
					if (!(i_225080 < l_225081)) break L3;
						F.line = 4317;
						c_221002 = x_220805[chckIndx(i_225080, 0, (x_220805 != null ? x_220805.length : 0)+0-1)-0];
						if ((c_221002 <= 127)) {
						F.line = 4321;
						add_escaped_char_28814(s_220804, s_220804_Idx, c_221002);
						}
						else {
							F.line = 4323;
						if (s_220804[s_220804_Idx] != null) { addChar(s_220804[s_220804_Idx], c_221002); } else { s_220804[s_220804_Idx] = [c_221002]; };
						}
						
						F.line = 206;
						i_225080 = addInt(i_225080, 1);
						if (!(((x_220805 != null ? x_220805.length : 0) == l_225081))) {
						F.line = 207;
						failed_assert_impl_15266(makeNimstrLit("/nim/lib/system/iterators.nim(207, 11) `len(a) == L` the length of the string changed while iterating over it"));
						}
						
					}
			} while(false);
		} while(false);
		F.line = 4324;
		if (s_220804[s_220804_Idx] != null) { s_220804[s_220804_Idx] = (s_220804[s_220804_Idx]).concat(makeNimstrLit("\"")); } else { s_220804[s_220804_Idx] = makeNimstrLit("\""); };
	framePtr = F.prev;

	
}

function add_quoted_221601(s_221604, s_221604_Idx, x_221605) {
	var F={procname:"addQuoted.addQuoted",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4337;
		if (s_221604[s_221604_Idx] != null) { s_221604[s_221604_Idx] = (s_221604[s_221604_Idx]).concat(nimBoolToStr(x_221605)); } else { s_221604[s_221604_Idx] = nimBoolToStr(x_221605).slice(); };
	framePtr = F.prev;

	
}

function add_quoted_223001(s_223004, s_223004_Idx, x_223005) {
	var F={procname:"addQuoted.addQuoted",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4337;
		if (s_223004[s_223004_Idx] != null) { s_223004[s_223004_Idx] = (s_223004[s_223004_Idx]).concat(cstrToNimstr((x_223005)+"")); } else { s_223004[s_223004_Idx] = cstrToNimstr((x_223005)+"").slice(); };
	framePtr = F.prev;

	
}

function add_quoted_223801(s_223804, s_223804_Idx, x_223805) {
	var F={procname:"addQuoted.addQuoted",prev:framePtr,filename:"system.nim",line:0};
	framePtr = F;
		F.line = 4337;
		if (s_223804[s_223804_Idx] != null) { s_223804[s_223804_Idx] = (s_223804[s_223804_Idx]).concat(cstrToNimstr((x_223805)+"")); } else { s_223804[s_223804_Idx] = cstrToNimstr((x_223805)+"").slice(); };
	framePtr = F.prev;

	
}

function HEX24_220055(x_220058) {
	var result_220059 = [null];

	var F={procname:"$.$",prev:framePtr,filename:"dollars.nim",line:0};
	framePtr = F;
		F.line = 73;
		result_220059[0] = nimCopy(null, makeNimstrLit("("), NTI138);
		F.line = 74;
		var first_element_220060 = true;
		if (!(first_element_220060)) {
		F.line = 79;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(", ")); } else { result_220059[0] = makeNimstrLit(", "); };
		}
		
		F.line = 81;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit("typ")); } else { result_220059[0] = makeNimstrLit("typ"); };
		F.line = 82;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(": ")); } else { result_220059[0] = makeNimstrLit(": "); };
		F.line = 90;
		add_quoted_220801(result_220059, 0, x_220058.typ);
		F.line = 91;
		first_element_220060 = false;
		if (!(first_element_220060)) {
		F.line = 79;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(", ")); } else { result_220059[0] = makeNimstrLit(", "); };
		}
		
		F.line = 81;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit("boolVal")); } else { result_220059[0] = makeNimstrLit("boolVal"); };
		F.line = 82;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(": ")); } else { result_220059[0] = makeNimstrLit(": "); };
		F.line = 90;
		add_quoted_221601(result_220059, 0, x_220058.boolVal);
		F.line = 91;
		first_element_220060 = false;
		if (!(first_element_220060)) {
		F.line = 79;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(", ")); } else { result_220059[0] = makeNimstrLit(", "); };
		}
		
		F.line = 81;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit("strVal")); } else { result_220059[0] = makeNimstrLit("strVal"); };
		F.line = 82;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(": ")); } else { result_220059[0] = makeNimstrLit(": "); };
		F.line = 90;
		add_quoted_220801(result_220059, 0, x_220058.strVal);
		F.line = 91;
		first_element_220060 = false;
		if (!(first_element_220060)) {
		F.line = 79;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(", ")); } else { result_220059[0] = makeNimstrLit(", "); };
		}
		
		F.line = 81;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit("floatVal")); } else { result_220059[0] = makeNimstrLit("floatVal"); };
		F.line = 82;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(": ")); } else { result_220059[0] = makeNimstrLit(": "); };
		F.line = 90;
		add_quoted_223001(result_220059, 0, x_220058.floatVal);
		F.line = 91;
		first_element_220060 = false;
		if (!(first_element_220060)) {
		F.line = 79;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(", ")); } else { result_220059[0] = makeNimstrLit(", "); };
		}
		
		F.line = 81;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit("intVal")); } else { result_220059[0] = makeNimstrLit("intVal"); };
		F.line = 82;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(": ")); } else { result_220059[0] = makeNimstrLit(": "); };
		F.line = 90;
		add_quoted_223801(result_220059, 0, x_220058.intVal);
		F.line = 91;
		first_element_220060 = false;
		F.line = 98;
		if (result_220059[0] != null) { result_220059[0] = (result_220059[0]).concat(makeNimstrLit(")")); } else { result_220059[0] = makeNimstrLit(")"); };
	framePtr = F.prev;

	return result_220059[0];

}

function raiseRangeError() {
		var eHEX60gensym22457_22603 = null;
		eHEX60gensym22457_22603 = {m_type: NTI3662, parent: null, name: null, message: null, trace: null, raiseId: 0, up: null};
		eHEX60gensym22457_22603.message = nimCopy(null, makeNimstrLit("value out of range"), NTI138);
		eHEX60gensym22457_22603.parent = null;
		raiseException(eHEX60gensym22457_22603, "RangeError");

	
}

function map_224639(s_224644, op_224647) {
	var result_224649 = null;

	var F={procname:"map.map",prev:framePtr,filename:"sequtils.nim",line:0};
	framePtr = F;
		F.line = 311;
		result_224649 = new Array(chckRange((s_224644 != null ? s_224644.length : 0), 0, 2147483647)); for (var i=0;i<chckRange((s_224644 != null ? s_224644.length : 0), 0, 2147483647);++i) {result_224649[i]=null;}		L1: do {
			F.line = 312;
			var i_224672 = 0;
			F.line = 2737;
			var colontmp__225107 = 0;
			F.line = 312;
			colontmp__225107 = (s_224644 != null ? s_224644.length : 0);
			F.line = 2739;
			var i_225108 = 0;
			L2: do {
				F.line = 2740;
					L3: while (true) {
					if (!(i_225108 < colontmp__225107)) break L3;
						F.line = 312;
						i_224672 = i_225108;
						F.line = 313;
						result_224649[chckIndx(i_224672, 0, (result_224649 != null ? result_224649.length : 0)+0-1)-0] = op_224647(s_224644[chckIndx(i_224672, 0, (s_224644 != null ? s_224644.length : 0)+0-1)-0]);
						F.line = 2742;
						i_225108 = addInt(i_225108, 1);
					}
			} while(false);
		} while(false);
	framePtr = F.prev;

	return result_224649;

}

function call_220014() {
	var F={procname:"app.call",prev:framePtr,filename:"app.nim",line:0};
	framePtr = F;
		F.line = 5;
		window.alert("Hello");
	framePtr = F.prev;

	
}

function input_220029(e_220031) {
	var F={procname:"app.input",prev:framePtr,filename:"app.nim",line:0};
	framePtr = F;
		F.line = 8;
		rawEcho(cstrToNimstr(e_220031.target.value));
	framePtr = F.prev;

	
}

import {h, useState} from 'dyo'

export default function app() {

		function HEX3Aanonymous_224444(row_224452) {

				function innerHEX60gensym224468_224469() {
					var result_224471 = null;

					var F={procname:":anonymous.inner`gensym224468",prev:framePtr,filename:"jsffi.nim",line:0};
					framePtr = F;
					BeforeRet: do {
						F.line = 430;
						var a_224472 = null;
						F.line = 431;
						a_224472 = {};
						F.line = 443;
						a_224472["style"] = "color:#ff6600";
						F.line = 450;
						result_224471 = a_224472;
						break BeforeRet;
					} while (false);
					framePtr = F.prev;

					return result_224471;

				}

			var result_224456 = null;

			var F={procname:"app.:anonymous",prev:framePtr,filename:"app.nim",line:0};
			framePtr = F;
				F.line = 19;
				result_224456 = h("li", innerHEX60gensym224468_224469(), toJSStr(cstrToNimstr((row_224452)+"")));
			framePtr = F.prev;

			return result_224456;

		}

		function innerHEX60gensym224693_224694() {

				function HEX3Aanonymous_224801() {
					var F={procname:"inner`gensym224693.:anonymous",prev:framePtr,filename:"jsffi.nim",line:0};
					framePtr = F;
						F.line = 21;
						call_220014();
					framePtr = F.prev;

					
				}

			var result_224696 = null;

			var F={procname:"app.inner`gensym224693",prev:framePtr,filename:"jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 430;
				var a_224697 = null;
				F.line = 431;
				a_224697 = {};
				F.line = 443;
				a_224697["onclick"] = HEX3Aanonymous_224801;
				F.line = 450;
				result_224696 = a_224697;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_224696;

		}

		function innerHEX60gensym224847_224848() {

				function HEX3Aanonymous_225001(e_225003) {
					var F={procname:"inner`gensym224847.:anonymous",prev:framePtr,filename:"jsffi.nim",line:0};
					framePtr = F;
						F.line = 23;
						input_220029(e_225003);
					framePtr = F.prev;

					
				}

			var result_224850 = null;

			var F={procname:"app.inner`gensym224847",prev:framePtr,filename:"jsffi.nim",line:0};
			framePtr = F;
			BeforeRet: do {
				F.line = 430;
				var a_224851 = null;
				F.line = 431;
				a_224851 = {};
				F.line = 443;
				a_224851["oninput"] = HEX3Aanonymous_225001;
				F.line = 450;
				result_224850 = a_224851;
				break BeforeRet;
			} while (false);
			framePtr = F.prev;

			return result_224850;

		}

	var result_220049 = null;

	var F={procname:"app.app",prev:framePtr,filename:"app.nim",line:0};
	framePtr = F;
	BeforeRet: do {
		F.line = 12;
		var list_220053 = [1, 2, 3];
		F.line = 13;
		var count_220054 = useState(0);
		F.line = 14;
		rawEcho(HEX24_220055(count_220054));
		F.line = 16;
		result_220049 = h("div", {}, [h("h1", {}, "Nim-dyo"), h("ul", {}, map_224639(list_220053, HEX3Aanonymous_224444)), h("button", innerHEX60gensym224693_224694(), "button"), h("div", {}, [h("input", innerHEX60gensym224847_224848(), "")])]);
		break BeforeRet;
	} while (false);
	framePtr = F.prev;

	return result_220049;

}
