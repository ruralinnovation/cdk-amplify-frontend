var apps = (function (exports) {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(getPrototypeOf);

	var superPropBase = createCommonjsModule(function (module) {
	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(superPropBase);

	var get = createCommonjsModule(function (module) {
	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
	  } else {
	    module.exports = _get = function _get(target, property, receiver) {
	      var base = superPropBase(target, property);
	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }

	      return desc.value;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  }

	  return _get.apply(this, arguments);
	}

	module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(get);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(inherits);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}

	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _typeof = unwrapExports(_typeof_1);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(possibleConstructorReturn);

	var isNativeFunction = createCommonjsModule(function (module) {
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(isNativeFunction);

	var isNativeReflectConstruct = createCommonjsModule(function (module) {
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(isNativeReflectConstruct);

	var construct = createCommonjsModule(function (module) {
	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(construct);

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf(Wrapper, Class);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(wrapNativeSuper);

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}

	module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	function noop() {}

	var identity = function identity(x) {
	  return x;
	};

	function assign(tar, src) {
	  // @ts-ignore
	  for (var k in src) {
	    tar[k] = src[k];
	  }

	  return tar;
	}

	function run(fn) {
	  return fn();
	}

	function blank_object() {
	  return Object.create(null);
	}

	function run_all(fns) {
	  fns.forEach(run);
	}

	function is_function(thing) {
	  return typeof thing === 'function';
	}

	function safe_not_equal(a, b) {
	  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
	}

	function is_empty(obj) {
	  return Object.keys(obj).length === 0;
	}

	function create_slot(definition, ctx, $$scope, fn) {
	  if (definition) {
	    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
	    return definition[0](slot_ctx);
	  }
	}

	function get_slot_context(definition, ctx, $$scope, fn) {
	  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
	}

	function get_slot_changes(definition, $$scope, dirty, fn) {
	  if (definition[2] && fn) {
	    var lets = definition[2](fn(dirty));

	    if ($$scope.dirty === undefined) {
	      return lets;
	    }

	    if (_typeof(lets) === 'object') {
	      var merged = [];
	      var len = Math.max($$scope.dirty.length, lets.length);

	      for (var i = 0; i < len; i += 1) {
	        merged[i] = $$scope.dirty[i] | lets[i];
	      }

	      return merged;
	    }

	    return $$scope.dirty | lets;
	  }

	  return $$scope.dirty;
	}

	function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
	  var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

	  if (slot_changes) {
	    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
	    slot.p(slot_context, slot_changes);
	  }
	}

	function null_to_empty(value) {
	  return value == null ? '' : value;
	}

	var is_client = typeof window !== 'undefined';
	var now = is_client ? function () {
	  return window.performance.now();
	} : function () {
	  return Date.now();
	};
	var raf = is_client ? function (cb) {
	  return requestAnimationFrame(cb);
	} : noop; // used internally for testing

	var tasks = new Set();

	function run_tasks(now) {
	  tasks.forEach(function (task) {
	    if (!task.c(now)) {
	      tasks["delete"](task);
	      task.f();
	    }
	  });
	  if (tasks.size !== 0) raf(run_tasks);
	}
	/**
	 * Creates a new task that runs on each raf frame
	 * until it returns a falsy value or is aborted
	 */


	function loop(callback) {
	  var task;
	  if (tasks.size === 0) raf(run_tasks);
	  return {
	    promise: new Promise(function (fulfill) {
	      tasks.add(task = {
	        c: callback,
	        f: fulfill
	      });
	    }),
	    abort: function abort() {
	      tasks["delete"](task);
	    }
	  };
	}

	function append(target, node) {
	  target.appendChild(node);
	}

	function insert(target, node, anchor) {
	  target.insertBefore(node, anchor || null);
	}

	function detach(node) {
	  node.parentNode.removeChild(node);
	}

	function destroy_each(iterations, detaching) {
	  for (var i = 0; i < iterations.length; i += 1) {
	    if (iterations[i]) iterations[i].d(detaching);
	  }
	}

	function element(name) {
	  return document.createElement(name);
	}

	function svg_element(name) {
	  return document.createElementNS('http://www.w3.org/2000/svg', name);
	}

	function text$2(data) {
	  return document.createTextNode(data);
	}

	function space() {
	  return text$2(' ');
	}

	function empty() {
	  return text$2('');
	}

	function listen(node, event, handler, options) {
	  node.addEventListener(event, handler, options);
	  return function () {
	    return node.removeEventListener(event, handler, options);
	  };
	}

	function attr(node, attribute, value) {
	  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
	}

	function children(element) {
	  return Array.from(element.childNodes);
	}

	function claim_element(nodes, name, attributes, svg) {
	  for (var i = 0; i < nodes.length; i += 1) {
	    var node = nodes[i];

	    if (node.nodeName === name) {
	      var j = 0;
	      var remove = [];

	      while (j < node.attributes.length) {
	        var attribute = node.attributes[j++];

	        if (!attributes[attribute.name]) {
	          remove.push(attribute.name);
	        }
	      }

	      for (var k = 0; k < remove.length; k++) {
	        node.removeAttribute(remove[k]);
	      }

	      return nodes.splice(i, 1)[0];
	    }
	  }

	  return svg ? svg_element(name) : element(name);
	}

	function claim_text(nodes, data) {
	  for (var i = 0; i < nodes.length; i += 1) {
	    var node = nodes[i];

	    if (node.nodeType === 3) {
	      node.data = '' + data;
	      return nodes.splice(i, 1)[0];
	    }
	  }

	  return text$2(data);
	}

	function claim_space(nodes) {
	  return claim_text(nodes, ' ');
	}

	function set_data(text, data) {
	  data = '' + data;
	  if (text.wholeText !== data) text.data = data;
	}

	function set_style(node, key, value, important) {
	  node.style.setProperty(key, value, important ? 'important' : '');
	}

	function toggle_class(element, name, toggle) {
	  element.classList[toggle ? 'add' : 'remove'](name);
	}

	function custom_event(type, detail) {
	  var e = document.createEvent('CustomEvent');
	  e.initCustomEvent(type, false, false, detail);
	  return e;
	}

	var HtmlTag = /*#__PURE__*/function () {
	  function HtmlTag() {
	    var anchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	    _classCallCheck(this, HtmlTag);

	    this.a = anchor;
	    this.e = this.n = null;
	  }

	  _createClass(HtmlTag, [{
	    key: "m",
	    value: function m(html, target) {
	      var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      if (!this.e) {
	        this.e = element(target.nodeName);
	        this.t = target;
	        this.h(html);
	      }

	      this.i(anchor);
	    }
	  }, {
	    key: "h",
	    value: function h(html) {
	      this.e.innerHTML = html;
	      this.n = Array.from(this.e.childNodes);
	    }
	  }, {
	    key: "i",
	    value: function i(anchor) {
	      for (var i = 0; i < this.n.length; i += 1) {
	        insert(this.t, this.n[i], anchor);
	      }
	    }
	  }, {
	    key: "p",
	    value: function p(html) {
	      this.d();
	      this.h(html);
	      this.i(this.a);
	    }
	  }, {
	    key: "d",
	    value: function d() {
	      this.n.forEach(detach);
	    }
	  }]);

	  return HtmlTag;
	}();

	var active_docs = new Set();
	var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

	function hash(str) {
	  var hash = 5381;
	  var i = str.length;

	  while (i--) {
	    hash = (hash << 5) - hash ^ str.charCodeAt(i);
	  }

	  return hash >>> 0;
	}

	function create_rule(node, a, b, duration, delay, ease, fn) {
	  var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
	  var step = 16.666 / duration;
	  var keyframes = '{\n';

	  for (var p = 0; p <= 1; p += step) {
	    var t = a + (b - a) * ease(p);
	    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
	  }

	  var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
	  var name = "__svelte_".concat(hash(rule), "_").concat(uid);
	  var doc = node.ownerDocument;
	  active_docs.add(doc);
	  var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
	  var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

	  if (!current_rules[name]) {
	    current_rules[name] = true;
	    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
	  }

	  var animation = node.style.animation || '';
	  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : "").concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
	  active += 1;
	  return name;
	}

	function delete_rule(node, name) {
	  var previous = (node.style.animation || '').split(', ');
	  var next = previous.filter(name ? function (anim) {
	    return anim.indexOf(name) < 0;
	  } // remove specific animation
	  : function (anim) {
	    return anim.indexOf('__svelte') === -1;
	  } // remove all Svelte animations
	  );
	  var deleted = previous.length - next.length;

	  if (deleted) {
	    node.style.animation = next.join(', ');
	    active -= deleted;
	    if (!active) clear_rules();
	  }
	}

	function clear_rules() {
	  raf(function () {
	    if (active) return;
	    active_docs.forEach(function (doc) {
	      var stylesheet = doc.__svelte_stylesheet;
	      var i = stylesheet.cssRules.length;

	      while (i--) {
	        stylesheet.deleteRule(i);
	      }

	      doc.__svelte_rules = {};
	    });
	    active_docs.clear();
	  });
	}

	var current_component;

	function set_current_component(component) {
	  current_component = component;
	}

	function get_current_component() {
	  if (!current_component) throw new Error("Function called outside component initialization");
	  return current_component;
	}

	function onMount(fn) {
	  get_current_component().$$.on_mount.push(fn);
	}

	var dirty_components = [];
	var binding_callbacks = [];
	var render_callbacks = [];
	var flush_callbacks = [];
	var resolved_promise = Promise.resolve();
	var update_scheduled = false;

	function schedule_update() {
	  if (!update_scheduled) {
	    update_scheduled = true;
	    resolved_promise.then(flush);
	  }
	}

	function add_render_callback(fn) {
	  render_callbacks.push(fn);
	}

	function add_flush_callback(fn) {
	  flush_callbacks.push(fn);
	}

	var flushing = false;
	var seen_callbacks = new Set();

	function flush() {
	  if (flushing) return;
	  flushing = true;

	  do {
	    // first, call beforeUpdate functions
	    // and update components
	    for (var i = 0; i < dirty_components.length; i += 1) {
	      var component = dirty_components[i];
	      set_current_component(component);
	      update(component.$$);
	    }

	    set_current_component(null);
	    dirty_components.length = 0;

	    while (binding_callbacks.length) {
	      binding_callbacks.pop()();
	    } // then, once components are updated, call
	    // afterUpdate functions. This may cause
	    // subsequent updates...


	    for (var _i = 0; _i < render_callbacks.length; _i += 1) {
	      var callback = render_callbacks[_i];

	      if (!seen_callbacks.has(callback)) {
	        // ...so guard against infinite loops
	        seen_callbacks.add(callback);
	        callback();
	      }
	    }

	    render_callbacks.length = 0;
	  } while (dirty_components.length);

	  while (flush_callbacks.length) {
	    flush_callbacks.pop()();
	  }

	  update_scheduled = false;
	  flushing = false;
	  seen_callbacks.clear();
	}

	function update($$) {
	  if ($$.fragment !== null) {
	    $$.update();
	    run_all($$.before_update);
	    var dirty = $$.dirty;
	    $$.dirty = [-1];
	    $$.fragment && $$.fragment.p($$.ctx, dirty);
	    $$.after_update.forEach(add_render_callback);
	  }
	}

	var promise;

	function wait() {
	  if (!promise) {
	    promise = Promise.resolve();
	    promise.then(function () {
	      promise = null;
	    });
	  }

	  return promise;
	}

	function dispatch(node, direction, kind) {
	  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
	}

	var outroing = new Set();
	var outros;

	function group_outros() {
	  outros = {
	    r: 0,
	    c: [],
	    p: outros // parent group

	  };
	}

	function check_outros() {
	  if (!outros.r) {
	    run_all(outros.c);
	  }

	  outros = outros.p;
	}

	function transition_in(block, local) {
	  if (block && block.i) {
	    outroing["delete"](block);
	    block.i(local);
	  }
	}

	function transition_out(block, local, detach, callback) {
	  if (block && block.o) {
	    if (outroing.has(block)) return;
	    outroing.add(block);
	    outros.c.push(function () {
	      outroing["delete"](block);

	      if (callback) {
	        if (detach) block.d(1);
	        callback();
	      }
	    });
	    block.o(local);
	  }
	}

	var null_transition = {
	  duration: 0
	};

	function create_in_transition(node, fn, params) {
	  var config = fn(node, params);
	  var running = false;
	  var animation_name;
	  var task;
	  var uid = 0;

	  function cleanup() {
	    if (animation_name) delete_rule(node, animation_name);
	  }

	  function go() {
	    var _ref = config || null_transition,
	        _ref$delay = _ref.delay,
	        delay = _ref$delay === void 0 ? 0 : _ref$delay,
	        _ref$duration = _ref.duration,
	        duration = _ref$duration === void 0 ? 300 : _ref$duration,
	        _ref$easing = _ref.easing,
	        easing = _ref$easing === void 0 ? identity : _ref$easing,
	        _ref$tick = _ref.tick,
	        tick = _ref$tick === void 0 ? noop : _ref$tick,
	        css = _ref.css;

	    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
	    tick(0, 1);
	    var start_time = now() + delay;
	    var end_time = start_time + duration;
	    if (task) task.abort();
	    running = true;
	    add_render_callback(function () {
	      return dispatch(node, true, 'start');
	    });
	    task = loop(function (now) {
	      if (running) {
	        if (now >= end_time) {
	          tick(1, 0);
	          dispatch(node, true, 'end');
	          cleanup();
	          return running = false;
	        }

	        if (now >= start_time) {
	          var t = easing((now - start_time) / duration);
	          tick(t, 1 - t);
	        }
	      }

	      return running;
	    });
	  }

	  var started = false;
	  return {
	    start: function start() {
	      if (started) return;
	      delete_rule(node);

	      if (is_function(config)) {
	        config = config();
	        wait().then(go);
	      } else {
	        go();
	      }
	    },
	    invalidate: function invalidate() {
	      started = false;
	    },
	    end: function end() {
	      if (running) {
	        cleanup();
	        running = false;
	      }
	    }
	  };
	}

	function create_out_transition(node, fn, params) {
	  var config = fn(node, params);
	  var running = true;
	  var animation_name;
	  var group = outros;
	  group.r += 1;

	  function go() {
	    var _ref2 = config || null_transition,
	        _ref2$delay = _ref2.delay,
	        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
	        _ref2$duration = _ref2.duration,
	        duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
	        _ref2$easing = _ref2.easing,
	        easing = _ref2$easing === void 0 ? identity : _ref2$easing,
	        _ref2$tick = _ref2.tick,
	        tick = _ref2$tick === void 0 ? noop : _ref2$tick,
	        css = _ref2.css;

	    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
	    var start_time = now() + delay;
	    var end_time = start_time + duration;
	    add_render_callback(function () {
	      return dispatch(node, false, 'start');
	    });
	    loop(function (now) {
	      if (running) {
	        if (now >= end_time) {
	          tick(0, 1);
	          dispatch(node, false, 'end');

	          if (! --group.r) {
	            // this will result in `end()` being called,
	            // so we don't need to clean up here
	            run_all(group.c);
	          }

	          return false;
	        }

	        if (now >= start_time) {
	          var t = easing((now - start_time) / duration);
	          tick(1 - t, t);
	        }
	      }

	      return running;
	    });
	  }

	  if (is_function(config)) {
	    wait().then(function () {
	      // @ts-ignore
	      config = config();
	      go();
	    });
	  } else {
	    go();
	  }

	  return {
	    end: function end(reset) {
	      if (reset && config.tick) {
	        config.tick(1, 0);
	      }

	      if (running) {
	        if (animation_name) delete_rule(node, animation_name);
	        running = false;
	      }
	    }
	  };
	}

	function create_bidirectional_transition(node, fn, params, intro) {
	  var config = fn(node, params);
	  var t = intro ? 0 : 1;
	  var running_program = null;
	  var pending_program = null;
	  var animation_name = null;

	  function clear_animation() {
	    if (animation_name) delete_rule(node, animation_name);
	  }

	  function init(program, duration) {
	    var d = program.b - t;
	    duration *= Math.abs(d);
	    return {
	      a: t,
	      b: program.b,
	      d: d,
	      duration: duration,
	      start: program.start,
	      end: program.start + duration,
	      group: program.group
	    };
	  }

	  function go(b) {
	    var _ref3 = config || null_transition,
	        _ref3$delay = _ref3.delay,
	        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
	        _ref3$duration = _ref3.duration,
	        duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
	        _ref3$easing = _ref3.easing,
	        easing = _ref3$easing === void 0 ? identity : _ref3$easing,
	        _ref3$tick = _ref3.tick,
	        tick = _ref3$tick === void 0 ? noop : _ref3$tick,
	        css = _ref3.css;

	    var program = {
	      start: now() + delay,
	      b: b
	    };

	    if (!b) {
	      // @ts-ignore todo: improve typings
	      program.group = outros;
	      outros.r += 1;
	    }

	    if (running_program) {
	      pending_program = program;
	    } else {
	      // if this is an intro, and there's a delay, we need to do
	      // an initial tick and/or apply CSS animation immediately
	      if (css) {
	        clear_animation();
	        animation_name = create_rule(node, t, b, duration, delay, easing, css);
	      }

	      if (b) tick(0, 1);
	      running_program = init(program, duration);
	      add_render_callback(function () {
	        return dispatch(node, b, 'start');
	      });
	      loop(function (now) {
	        if (pending_program && now > pending_program.start) {
	          running_program = init(pending_program, duration);
	          pending_program = null;
	          dispatch(node, running_program.b, 'start');

	          if (css) {
	            clear_animation();
	            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
	          }
	        }

	        if (running_program) {
	          if (now >= running_program.end) {
	            tick(t = running_program.b, 1 - t);
	            dispatch(node, running_program.b, 'end');

	            if (!pending_program) {
	              // we're done
	              if (running_program.b) {
	                // intro — we can tidy up immediately
	                clear_animation();
	              } else {
	                // outro — needs to be coordinated
	                if (! --running_program.group.r) run_all(running_program.group.c);
	              }
	            }

	            running_program = null;
	          } else if (now >= running_program.start) {
	            var p = now - running_program.start;
	            t = running_program.a + running_program.d * easing(p / running_program.duration);
	            tick(t, 1 - t);
	          }
	        }

	        return !!(running_program || pending_program);
	      });
	    }
	  }

	  return {
	    run: function run(b) {
	      if (is_function(config)) {
	        wait().then(function () {
	          // @ts-ignore
	          config = config();
	          go(b);
	        });
	      } else {
	        go(b);
	      }
	    },
	    end: function end() {
	      clear_animation();
	      running_program = pending_program = null;
	    }
	  };
	}

	var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

	function bind(component, name, callback) {
	  var index = component.$$.props[name];

	  if (index !== undefined) {
	    component.$$.bound[index] = callback;
	    callback(component.$$.ctx[index]);
	  }
	}

	function create_component(block) {
	  block && block.c();
	}

	function claim_component(block, parent_nodes) {
	  block && block.l(parent_nodes);
	}

	function mount_component(component, target, anchor) {
	  var _component$$$ = component.$$,
	      fragment = _component$$$.fragment,
	      on_mount = _component$$$.on_mount,
	      on_destroy = _component$$$.on_destroy,
	      after_update = _component$$$.after_update;
	  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

	  add_render_callback(function () {
	    var new_on_destroy = on_mount.map(run).filter(is_function);

	    if (on_destroy) {
	      on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
	    } else {
	      // Edge case - component was destroyed immediately,
	      // most likely as a result of a binding initialising
	      run_all(new_on_destroy);
	    }

	    component.$$.on_mount = [];
	  });
	  after_update.forEach(add_render_callback);
	}

	function destroy_component(component, detaching) {
	  var $$ = component.$$;

	  if ($$.fragment !== null) {
	    run_all($$.on_destroy);
	    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
	    // preserve final state?)

	    $$.on_destroy = $$.fragment = null;
	    $$.ctx = [];
	  }
	}

	function make_dirty(component, i) {
	  if (component.$$.dirty[0] === -1) {
	    dirty_components.push(component);
	    schedule_update();
	    component.$$.dirty.fill(0);
	  }

	  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
	}

	function init(component, options, instance, create_fragment, not_equal, props) {
	  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
	  var parent_component = current_component;
	  set_current_component(component);
	  var prop_values = options.props || {};
	  var $$ = component.$$ = {
	    fragment: null,
	    ctx: null,
	    // state
	    props: props,
	    update: noop,
	    not_equal: not_equal,
	    bound: blank_object(),
	    // lifecycle
	    on_mount: [],
	    on_destroy: [],
	    before_update: [],
	    after_update: [],
	    context: new Map(parent_component ? parent_component.$$.context : []),
	    // everything else
	    callbacks: blank_object(),
	    dirty: dirty,
	    skip_bound: false
	  };
	  var ready = false;
	  $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
	    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

	    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
	      if (ready) make_dirty(component, i);
	    }

	    return ret;
	  }) : [];
	  $$.update();
	  ready = true;
	  run_all($$.before_update); // `false` as a special case of no DOM component

	  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

	  if (options.target) {
	    if (options.hydrate) {
	      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

	      $$.fragment && $$.fragment.l(nodes);
	      nodes.forEach(detach);
	    } else {
	      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	      $$.fragment && $$.fragment.c();
	    }

	    if (options.intro) transition_in(component.$$.fragment);
	    mount_component(component, options.target, options.anchor);
	    flush();
	  }

	  set_current_component(parent_component);
	}

	var SvelteComponent = /*#__PURE__*/function () {
	  function SvelteComponent() {
	    _classCallCheck(this, SvelteComponent);
	  }

	  _createClass(SvelteComponent, [{
	    key: "$destroy",
	    value: function $destroy() {
	      destroy_component(this, 1);
	      this.$destroy = noop;
	    }
	  }, {
	    key: "$on",
	    value: function $on(type, callback) {
	      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
	      callbacks.push(callback);
	      return function () {
	        var index = callbacks.indexOf(callback);
	        if (index !== -1) callbacks.splice(index, 1);
	      };
	    }
	  }, {
	    key: "$set",
	    value: function $set($$props) {
	      if (this.$$set && !is_empty($$props)) {
	        this.$$.skip_bound = true;
	        this.$$set($$props);
	        this.$$.skip_bound = false;
	      }
	    }
	  }]);

	  return SvelteComponent;
	}();

	function cubicInOut(t) {
	  return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
	}

	function cubicOut(t) {
	  var f = t - 1.0;
	  return f * f * f + 1.0;
	}

	function quintOut(t) {
	  return --t * t * t * t * t + 1;
	}

	function fade(node, _ref2) {
	  var _ref2$delay = _ref2.delay,
	      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
	      _ref2$duration = _ref2.duration,
	      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
	      _ref2$easing = _ref2.easing,
	      easing = _ref2$easing === void 0 ? identity : _ref2$easing;
	  var o = +getComputedStyle(node).opacity;
	  return {
	    delay: delay,
	    duration: duration,
	    easing: easing,
	    css: function css(t) {
	      return "opacity: ".concat(t * o);
	    }
	  };
	}

	function fly(node, _ref3) {
	  var _ref3$delay = _ref3.delay,
	      delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
	      _ref3$duration = _ref3.duration,
	      duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
	      _ref3$easing = _ref3.easing,
	      easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
	      _ref3$x = _ref3.x,
	      x = _ref3$x === void 0 ? 0 : _ref3$x,
	      _ref3$y = _ref3.y,
	      y = _ref3$y === void 0 ? 0 : _ref3$y,
	      _ref3$opacity = _ref3.opacity,
	      opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;
	  var style = getComputedStyle(node);
	  var target_opacity = +style.opacity;
	  var transform = style.transform === 'none' ? '' : style.transform;
	  var od = target_opacity * (1 - opacity);
	  return {
	    delay: delay,
	    duration: duration,
	    easing: easing,
	    css: function css(t, u) {
	      return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
	    }
	  };
	}

	function draw(node, _ref6) {
	  var _ref6$delay = _ref6.delay,
	      delay = _ref6$delay === void 0 ? 0 : _ref6$delay,
	      speed = _ref6.speed,
	      duration = _ref6.duration,
	      _ref6$easing = _ref6.easing,
	      easing = _ref6$easing === void 0 ? cubicInOut : _ref6$easing;
	  var len = node.getTotalLength();

	  if (duration === undefined) {
	    if (speed === undefined) {
	      duration = 800;
	    } else {
	      duration = len / speed;
	    }
	  } else if (typeof duration === 'function') {
	    duration = duration(len);
	  }

	  return {
	    delay: delay,
	    duration: duration,
	    easing: easing,
	    css: function css(t, u) {
	      return "stroke-dasharray: ".concat(t * len, " ").concat(u * len);
	    }
	  };
	}

	function expand(node, params) {
	  var _params$delay = params.delay,
	      delay = _params$delay === void 0 ? 0 : _params$delay,
	      _params$duration = params.duration,
	      duration = _params$duration === void 0 ? 400 : _params$duration,
	      _params$easing = params.easing,
	      easing = _params$easing === void 0 ? cubicOut : _params$easing;
	  var w = parseFloat(getComputedStyle(node).strokeWidth);
	  return {
	    delay: delay,
	    duration: duration,
	    easing: easing,
	    css: function css(t) {
	      return "opacity: ".concat(t, "; stroke-width: ").concat(t * w);
	    }
	  };
	}

	var shape$1 = "M101.801 40.115l-.413-.225-27.01-15.617-3.901-2.252L30.6 45.07l-.637-2.891.037-.038L67.663 20.37l-3.038-1.764-35.338 20.459-.637-2.89.037-.038L61.812 16.99l-1.013-.6c-1.313-.75-2.889-.6-4.727.45L28.65 32.72l-3.864 2.215v46.099l-2.814-.901V36.549l-3.038 1.764v40.844l-2.814-.901V39.928l-1.013.6c-1.313.75-1.988 2.215-1.988 4.28v36.188l39.914 23.05-2.175 1.989-.038-.037-37.7-21.736v3.491l35.374 20.422-2.176 1.99-.037-.038-33.162-19.108v1.164c0 1.502.938 2.816 2.739 3.867l.412.225 27.047 15.617 3.864 2.214 39.915-23.05.637 2.891-.037.038-37.664 21.773 3.039 1.765 35.375-20.422.638 2.89-.038.038-33.124 19.145.975.563.038.038c1.313.751 2.888.601 4.726-.451l27.46-15.841 3.864-2.215V55.131l2.814.901v43.584l3.038-1.764V56.97l2.814.9V96.2l1.012-.6c1.313-.752 1.989-2.216 1.989-4.318V55.094L64.625 32.119l2.213-1.99.038.038 37.663 21.773V48.45L69.164 28.027l2.176-1.99.037.038 33.125 19.146v-1.164c.037-1.614-.901-2.89-2.701-3.942zm-15.23 9.122c1.275.751 2.4 2.703 2.438 4.167v29.282c0 1.463-1.126 3.453-2.401 4.204L61.286 101.53c-.638.375-1.5.563-2.438.563-.9 0-1.8-.188-2.4-.563L31.087 86.89c-1.275-.75-2.363-2.665-2.4-4.167V53.404c.037-1.501 1.125-3.378 2.4-4.13l25.322-14.64c.6-.375 1.5-.563 2.438-.563.938 0 1.8.188 2.438.563L86.57 49.237z";
	var text$1 = "M41.14 55.694h-2.663c-3.488 0-5.14 1.69-5.14 5.18V75.29c0 3.491 1.689 5.143 5.14 5.143h2.589c3.45 0 5.139-1.69 5.139-5.143v-6.457h-5.552v6.344c0 .338-.225.526-.638.526h-.562c-.376 0-.526-.188-.526-.526v-14.19c0-.375.188-.525.526-.525h.675c.375 0 .525.187.525.525v3.154c0 1.651.075 2.44 1.613 2.44h3.939v-5.706c0-3.53-1.613-5.18-5.064-5.18z M56.297 55.694h-2.813c-3.49 0-5.177 1.69-5.177 5.18V75.29c0 3.491 1.688 5.143 5.176 5.143h2.814c3.451 0 5.14-1.69 5.14-5.143V60.875c.037-3.492-1.651-5.18-5.14-5.18zm-.525 19.483c0 .376-.188.526-.6.526h-.563c-.413 0-.6-.188-.6-.526v-14.19c0-.375.187-.525.6-.525h.563c.412 0 .6.187.6.525v14.19zM69.09 71.498h1.162c.376 0 .526.188.526.526v5.743c0 1.652.075 2.44 1.613 2.44h4.876s0-.037-.075-.112c-.45-.375-.675-1.464-.675-2.29v-5.256c0-1.914-.788-2.928-2.626-3.378l-.3-.075.263-.075c1.763-.6 2.588-1.84 2.588-3.942v-3.98c0-3.453-1.688-5.142-5.177-5.142H63.5v24.288h5.59v-8.747zm0-10.774h1.2c.375 0 .525.188.525.526v4.993c0 .375-.188.525-.525.525h-1.2v-6.044zM84.32 55.92h-5.777v24.288h5.777V55.919z";

	var shape = "M 126.28696,41.835323 72.573872,10.80815 C 71.679135,10.259762 70.668948,10 69.601036,10 c -1.067912,0 -2.049237,0.259762 -2.972837,0.80815 L 12.972836,41.835323 C 11.096775,42.874373 10,44.837022 10,46.943983 v 62.112077 c 0,2.10696 1.096775,4.06961 2.972836,5.10866 l 53.713088,31.02717 c 0.894738,0.54839 1.904925,0.80815 2.972837,0.80815 1.010187,0 2.049236,-0.25976 2.972836,-0.80815 l 53.713093,-31.02717 c 1.81833,-1.03905 2.97283,-3.0017 2.97283,-5.10866 V 46.943983 c -0.11545,-2.106961 -1.21222,-4.06961 -3.03056,-5.10866 z m -25.45671,71.319207 3.17487,5.42615 -16.36503,9.46689 -3.174874,-5.42615 z m -27.534816,7.96604 c -0.548387,0.34635 -1.154499,0.54839 -1.818337,0.75043 -0.663837,0.20204 -1.241087,0.25976 -1.904924,0.25976 -0.808149,0 -1.616299,-0.14431 -2.366724,-0.40407 -0.4618,-0.14432 -0.894737,-0.34635 -1.298812,-0.60612 l -31.80646,-18.3854 c -0.548388,-0.34635 -1.067912,-0.6927 -1.50085,-1.1545 -0.202037,-0.20204 -0.461799,-0.4618 -0.606112,-0.6927 -0.202037,-0.25976 -0.34635,-0.49066 -0.490662,-0.80815 -0.08659,-0.144311 -0.144313,-0.288623 -0.202038,-0.404073 -0.08659,-0.259762 -0.259762,-0.490662 -0.288624,-0.750425 -0.288625,-0.808149 -0.4618,-1.616299 -0.4618,-2.453311 V 59.585753 c 0,-0.490663 0.05773,-0.952462 0.144312,-1.443125 0.05772,-0.144312 0.05772,-0.288625 0.08659,-0.461799 0.08659,-0.404075 0.259762,-0.750425 0.404074,-1.1545 0.144313,-0.288625 0.288625,-0.606112 0.4618,-0.865875 0.08659,-0.202037 0.259763,-0.346349 0.34635,-0.548387 0.202038,-0.259762 0.404075,-0.490662 0.606112,-0.6927 0.202038,-0.202037 0.4618,-0.461799 0.6927,-0.663837 0.259762,-0.202037 0.490662,-0.404075 0.80815,-0.548387 L 53.582355,41.921911 65.906637,34.821739 c 1.1545,-0.663837 2.395587,-1.010187 3.665536,-1.010187 1.26995,0 2.511037,0.34635 3.665536,1.010187 l 22.39729,12.930394 9.438031,5.45501 c 0.14431,0.08659 0.28863,0.202037 0.4618,0.288625 0.14431,0.08659 0.28863,0.202037 0.40408,0.288625 1.76061,1.356537 2.7708,3.463498 2.7708,5.714772 v 36.799671 c 0,2.597624 -1.41427,5.022074 -3.66554,6.320884 z m -3.665536,10.04415 7.186759,-4.09847 3.174874,5.42614 -10.33277,5.97454 -10.275046,-5.97454 3.174874,-5.42614 z m -14.921906,-8.57216 -3.174873,5.42615 -16.393893,-9.49576 3.174874,-5.42615 z M 23.507644,51.417669 v 8.283534 H 17.186759 V 47.780995 l 10.275046,-5.974534 3.174873,5.426147 z m 0,17.144317 V 87.466915 H 17.186759 V 68.561986 Z m 0,27.765713 v 8.283531 l 7.186759,4.1562 -3.174873,5.42615 -10.303908,-6.0034 V 96.298836 h 6.292022 z m 14.864181,-53.482189 -3.174874,-5.426147 16.36503,-9.466896 3.174874,5.426147 z m 31.258073,-18.067917 -7.186759,4.156198 -3.174874,-5.426147 10.332771,-6.003397 10.33277,5.974534 -3.174874,5.426148 z m 14.864181,8.572159 3.174874,-5.426148 16.336167,9.495759 -3.17487,5.426147 z m 31.258071,71.232618 v -8.283534 h 6.26316 v 11.891344 l -10.27504,5.97454 -3.17488,-5.42615 z m 0,-17.144317 V 68.533124 h 6.26316 v 18.904929 z m 0,-27.765713 v -8.283534 l -7.18676,-4.156198 3.17488,-5.426147 10.27504,5.974534 V 59.67234 Z";
	var text = "M 57.767416,91.594251 v -7.359934 c 0,-2.713074 -1.096775,-4.098474 -3.723261,-4.762311 l -0.404075,-0.08659 0.34635,-0.08659 c 2.511037,-0.865874 3.665536,-2.597624 3.665536,-5.512735 v -5.628185 c 0,-4.848898 -2.366724,-7.215621 -7.273347,-7.215621 H 39.382012 v 34.144322 h 7.879459 V 82.820055 h 1.645161 c 0.548388,0 0.750425,0.259762 0.750425,0.750424 v 8.081497 c 0,2.308999 0.08659,3.405773 2.251274,3.405773 h 6.782685 c 0.05773,0 0.08659,0 0.08659,0 0,0 0,-0.05773 -0.08659,-0.144312 -0.606113,-0.606112 -0.9236,-2.164687 -0.9236,-3.319186 z M 49.714782,75.373533 c 0,0.548387 -0.259762,0.750425 -0.750425,0.750425 h -1.731749 v -8.485571 h 1.702887 c 0.548387,0 0.750425,0.259762 0.750425,0.750424 v 6.984722 z M 68.764024,60.94229 h -8.139222 v 34.144322 h 8.139222 z M 82.127355,60.94229 h -3.665536 c -4.820035,0 -7.129034,2.308999 -7.129034,7.129034 0,0 0,1.500849 0,3.954161 0,4.358235 2.222411,5.801359 3.521223,6.667234 1.414262,0.80815 5.22411,3.319186 5.512735,3.463498 0.6927,0.4618 0.952462,1.298812 1.010187,1.818337 0,1.356537 0,2.511037 0,3.867573 0,0.4618 -0.202037,0.6927 -0.692699,0.6927 h -0.80815 c -0.548387,0 -0.894737,-0.259762 -0.894737,-0.6927 v -4.560273 h -7.677422 v 4.704586 c 0,4.76231 2.308999,7.071309 7.129035,7.071309 h 3.550086 c 4.76231,0 7.129034,-2.251274 7.129034,-7.071309 v -3.059424 c 0,0 0,-0.05772 0,-1.558574 0,-0.952462 -0.490662,-3.117149 -1.962649,-4.820035 -3.001699,-3.521224 -6.84041,-3.867574 -7.735147,-6.320885 -0.144312,-0.4618 -0.34635,-1.096775 -0.34635,-1.616299 v -2.366724 c 0,-0.490663 0.259763,-0.6927 0.6927,-0.6927 h 0.952462 c 0.490662,0 0.6927,0.259762 0.6927,0.6927 v 1.414262 c 0,2.251274 0.08659,3.348048 2.222411,3.348048 h 5.426148 v -4.906623 c 0.08659,-4.906622 -2.164687,-7.157896 -6.926997,-7.157896 z M 99.848922,60.94229 h -8.139221 v 34.144322 h 8.139221 z";

	/* E:\Users\jhall\Documents\CORI\apps\src\headers\CORI_RISI_Header.svelte generated by Svelte v3.26.0 */

	function add_css$6() {
		var style = element("style");
		style.id = "svelte-sdid3b-style";
		style.textContent = ".svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{box-sizing:border-box}button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;cursor:pointer;overflow:visible;text-transform:none}svg.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:root){overflow:hidden}.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:absolute;top:0;left:0;width:100vw}*.Light-on-Dark.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b a.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{background-color:#16343e;background-color:#26535c}.site-header__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent;transition:all .35s ease,background-color 0s}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:100%;padding-left:56px;padding-right:56px;margin-right:0px;margin-left:0px}@media(max-width: 540px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding:0 0 0 1em;max-width:100vh;width:100%}}@media(min-width: 640px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 768px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1024px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1080px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:100%}}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{list-style:none;display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.justify-content-between.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{justify-content:space-between !important}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:calc(100% + 20px);list-style:none;padding:0;margin:0 0 0 -10px}.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{height:76px;flex-wrap:nowrap;transition:.35s ease}@media(min-width: 768px){.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{will-change:height}}@media(min-width: 768px){}.col.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:relative;width:100%;padding-right:10px;padding-left:10px}.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 0 auto;width:auto;max-width:100%}.site-header__main-logo.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:50%;align-self:flex-start}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:143px;height:92px;position:absolute;top:12px;left:0;transition:all .35s ease;transform-origin:top left;pointer-events:none;touch-action:none;background-color:transparent}@media(max-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{height:54px}}@media(min-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:154px;height:74px;top:4px;left:1px}}@media(min-width: 1200px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:211px;height:92px;will-change:height,width,top,left}}.site-header__main-logo.svelte-sdid3b svg.logo-border.svelte-sdid3b.svelte-sdid3b{fill:none;z-index:0}.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{top:-1px}@media(min-width: 768px){.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:155px;height:100px;top:-3px;left:1px}}.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{transition:.25s cubic-bezier(.77,0,.175,1)}@media(max-width: 1023px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text g.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{display:none}}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .logo path.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text path.svelte-sdid3b{fill:#16343e}.header-stuck .site-header__main-logo.svelte-sdid3b svg .border.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.home .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__main-logo svg .border.svelte-sdid3b.svelte-sdid3b{fill:#16343e;fill:#26535c}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b path.svelte-sdid3b{transition:all .35s ease,fill 0s}.site-header__menu-section.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__primary-menu.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding-top:10px}.site-header__item.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__item.svelte-sdid3b .site-header__item_inner.svelte-sdid3b.svelte-sdid3b{display:flex;align-items:center;flex:1 0 auto}.site-header__menu-section.svelte-sdid3b .menu.svelte-sdid3b.svelte-sdid3b{align-items:stretch;flex-wrap:nowrap}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{margin-right:0;align-items:center}@media(min-width: 1200px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{align-items:center}}.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex;flex:0 0 0;margin-right:2.5%;order:4;align-items:center}@media(max-width: 820px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{display:none}}@media(min-width: 820px){.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}}.hamburger-control__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#16343E}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__close .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.hamburger-control__close.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}.site-header__menu-section.svelte-sdid3b .menu .menu-item.svelte-sdid3b.svelte-sdid3b{align-items:stretch;display:flex}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b>li.svelte-sdid3b{padding:0 !important;margin:0 12px}.site-header__row.svelte-sdid3b #primary-navigation>li a.svelte-sdid3b.svelte-sdid3b{padding-left:0;padding-right:0}.site-header__primary-menu.svelte-sdid3b .top-level-nav-link.svelte-sdid3b.svelte-sdid3b{padding:0 10px 0 10px}.header-stuck .site-header__menu-section.svelte-sdid3b .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:#16343e !important;display:inline;background-size:0 1px;background-position:0 calc(100% - 4px);background-repeat:no-repeat;transition:.25s cubic-bezier(.77,0,.175,1);transition-duration:.35s;background-image:linear-gradient(#16343e,#16343e) !important}*.Light-on-Dark.svelte-sdid3b .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233)}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233) !important}.has-dropdowns.svelte-sdid3b .sub-menu li.svelte-sdid3b.svelte-sdid3b{width:100%;margin:0 0 12px;padding:0;border:0 !important;display:inline-block !important;clear:both}.screen-reader-text.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:focus):not(:active),.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 1 auto;padding:0;margin:0;display:flex;align-items:center;width:auto;height:100%}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{content:initial !important;display:block !important}";
		append(document.head, style);
	}

	// (741:20) {#if (!!logo_visible)}
	function create_if_block$5(ctx) {
		let svg;
		let defs;
		let mask;
		let path0;
		let path1;
		let g;
		let current_block_type_index;
		let if_block0;
		let current_block_type_index_1;
		let if_block1;
		let current;
		const if_block_creators = [create_if_block_5$2, create_if_block_6];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (!!/*cori_rendered*/ ctx[4]) return 0;
			if (!!/*risi_rendered*/ ctx[6]) return 1;
			return -1;
		}

		if (~(current_block_type_index = select_block_type(ctx))) {
			if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		}

		const if_block_creators_1 = [create_if_block_1$4, create_if_block_2$3, create_if_block_3$3, create_if_block_4$3];
		const if_blocks_1 = [];

		function select_block_type_1(ctx, dirty) {
			if (!/*hide_cori*/ ctx[3] && !/*cori_rendered*/ ctx[4]) return 0;
			if (!/*hide_cori*/ ctx[3]) return 1;
			if (!/*hide_risi*/ ctx[5] && !/*risi_rendered*/ ctx[6]) return 2;
			if (!/*hide_risi*/ ctx[5]) return 3;
			return -1;
		}

		if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
			if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
		}

		return {
			c() {
				svg = svg_element("svg");
				defs = svg_element("defs");
				mask = svg_element("mask");
				path0 = svg_element("path");
				path1 = svg_element("path");
				g = svg_element("g");
				if (if_block0) if_block0.c();
				if (if_block1) if_block1.c();
				this.h();
			},
			l(nodes) {
				svg = claim_element(
					nodes,
					"svg",
					{
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true,
						class: true
					},
					1
				);

				var svg_nodes = children(svg);
				defs = claim_element(svg_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);

				mask = claim_element(
					defs_nodes,
					"mask",
					{
						id: true,
						x: true,
						y: true,
						width: true,
						height: true,
						maskUnits: true,
						maskContentUnits: true,
						class: true
					},
					1
				);

				var mask_nodes = children(mask);
				path0 = claim_element(mask_nodes, "path", { fill: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(mask_nodes, "path", { d: true, fill: true, class: true }, 1);
				children(path1).forEach(detach);
				mask_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				g = claim_element(svg_nodes, "g", { class: true, mask: true }, 1);
				var g_nodes = children(g);
				if (if_block0) if_block0.l(g_nodes);
				g_nodes.forEach(detach);
				if (if_block1) if_block1.l(svg_nodes);
				svg_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "#fff");
				attr(path0, "d", "M0 0h308v136H0z");
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(path1, "fill", "#000");
				attr(path1, "class", "svelte-sdid3b");
				attr(mask, "id", "border-mask");
				attr(mask, "x", "0");
				attr(mask, "y", "0");
				attr(mask, "width", "308");
				attr(mask, "height", "136");
				attr(mask, "maskUnits", "userSpaceOnUse");
				attr(mask, "maskContentUnits", "userSpaceOnUse");
				attr(mask, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(g, "class", "text svelte-sdid3b");
				attr(g, "mask", "url(#border-mask)");
				attr(svg, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg, "width", "308");
				attr(svg, "height", "136");
				attr(svg, "viewBox", "0 0 308 136");
				attr(svg, "fill", "none");
				set_style(svg, "background-color", "transparent");
				attr(svg, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, svg, anchor);
				append(svg, defs);
				append(defs, mask);
				append(mask, path0);
				append(mask, path1);
				append(svg, g);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].m(g, null);
				}

				if (~current_block_type_index_1) {
					if_blocks_1[current_block_type_index_1].m(svg, null);
				}

				current = true;
			},
			p(ctx, dirty) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if (~current_block_type_index) {
						if_blocks[current_block_type_index].p(ctx, dirty);
					}
				} else {
					if (if_block0) {
						group_outros();

						transition_out(if_blocks[previous_block_index], 1, 1, () => {
							if_blocks[previous_block_index] = null;
						});

						check_outros();
					}

					if (~current_block_type_index) {
						if_block0 = if_blocks[current_block_type_index];

						if (!if_block0) {
							if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
							if_block0.c();
						}

						transition_in(if_block0, 1);
						if_block0.m(g, null);
					} else {
						if_block0 = null;
					}
				}

				let previous_block_index_1 = current_block_type_index_1;
				current_block_type_index_1 = select_block_type_1(ctx);

				if (current_block_type_index_1 === previous_block_index_1) {
					if (~current_block_type_index_1) {
						if_blocks_1[current_block_type_index_1].p(ctx, dirty);
					}
				} else {
					if (if_block1) {
						group_outros();

						transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
							if_blocks_1[previous_block_index_1] = null;
						});

						check_outros();
					}

					if (~current_block_type_index_1) {
						if_block1 = if_blocks_1[current_block_type_index_1];

						if (!if_block1) {
							if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
							if_block1.c();
						}

						transition_in(if_block1, 1);
						if_block1.m(svg, null);
					} else {
						if_block1 = null;
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(svg);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].d();
				}

				if (~current_block_type_index_1) {
					if_blocks_1[current_block_type_index_1].d();
				}
			}
		};
	}

	// (756:60) 
	function create_if_block_6(ctx) {
		let g;
		let path0;
		let path1;
		let path2;
		let path3;
		let path4;
		let path5;
		let path6;
		let path7;
		let path8;
		let path9;
		let path10;
		let path11;
		let path12;
		let path13;
		let path14;
		let path15;
		let path16;
		let path17;
		let path18;
		let path19;
		let path20;
		let path21;
		let path22;
		let path23;
		let path24;
		let path25;
		let path26;
		let path27;
		let path28;
		let g_fill_value;
		let g_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				path2 = svg_element("path");
				path3 = svg_element("path");
				path4 = svg_element("path");
				path5 = svg_element("path");
				path6 = svg_element("path");
				path7 = svg_element("path");
				path8 = svg_element("path");
				path9 = svg_element("path");
				path10 = svg_element("path");
				path11 = svg_element("path");
				path12 = svg_element("path");
				path13 = svg_element("path");
				path14 = svg_element("path");
				path15 = svg_element("path");
				path16 = svg_element("path");
				path17 = svg_element("path");
				path18 = svg_element("path");
				path19 = svg_element("path");
				path20 = svg_element("path");
				path21 = svg_element("path");
				path22 = svg_element("path");
				path23 = svg_element("path");
				path24 = svg_element("path");
				path25 = svg_element("path");
				path26 = svg_element("path");
				path27 = svg_element("path");
				path28 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						class: true,
						fill: true,
						opacity: true,
						transform: true
					},
					1
				);

				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path1).forEach(detach);
				path2 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path2).forEach(detach);
				path3 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path3).forEach(detach);
				path4 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path4).forEach(detach);
				path5 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path5).forEach(detach);
				path6 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path6).forEach(detach);
				path7 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path7).forEach(detach);
				path8 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path8).forEach(detach);
				path9 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path9).forEach(detach);
				path10 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path10).forEach(detach);
				path11 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path11).forEach(detach);
				path12 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path12).forEach(detach);
				path13 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path13).forEach(detach);
				path14 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path14).forEach(detach);
				path15 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path15).forEach(detach);
				path16 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path16).forEach(detach);
				path17 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path17).forEach(detach);
				path18 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path18).forEach(detach);
				path19 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path19).forEach(detach);
				path20 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path20).forEach(detach);
				path21 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path21).forEach(detach);
				path22 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path22).forEach(detach);
				path23 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path23).forEach(detach);
				path24 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path24).forEach(detach);
				path25 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path25).forEach(detach);
				path26 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path26).forEach(detach);
				path27 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path27).forEach(detach);
				path28 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path28).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "class", "st0 svelte-sdid3b");
				attr(path0, "d", "m 163.17322,54.246193 c 2.19355,-0.865875 3.55008,-2.828524 3.55008,-5.426148 0,-3.059424 -2.30899,-5.714772 -6.14771,-5.714772 h -8.2258 v 17.981329 h 4.04074 v -6.349747 h 2.51104 l 3.86757,6.349747 h 4.73345 V 60.82684 Z m -6.78269,-7.53311 h 3.98303 c 1.55857,0 2.22241,1.067912 2.22241,2.164687 0,1.125637 -0.57725,2.280136 -2.22241,2.280136 h -3.98303 z");
				attr(path1, "class", "st0 svelte-sdid3b");
				attr(path1, "d", "m 173.53485,61.317502 c 1.76061,0 2.91511,-0.634975 3.66554,-1.529712 h 0.11545 l 0.31748,1.26995 h 3.52123 V 47.636683 h -3.95416 v 7.446522 c 0,1.616299 -1.03905,2.626486 -2.45331,2.626486 -1.55858,0 -2.25128,-0.9236 -2.25128,-2.453311 v -7.590834 h -3.95416 v 8.831921 c 0,2.943973 1.99151,4.820035 4.99321,4.820035 z");
				attr(path2, "class", "st0 svelte-sdid3b");
				attr(path2, "d", "m 182.91516,61.086602 h 3.6944 V 54.44823 c 0,-2.164687 1.21222,-3.405773 3.08828,-3.405773 h 1.29882 v -3.607811 h -0.9236 c -1.73175,0 -2.85739,1.010187 -3.43464,2.193549 h -0.11545 l -0.31749,-1.962649 h -3.29032 z");
				attr(path3, "class", "st0 svelte-sdid3b");
				attr(path3, "d", "m 196.04759,61.317502 c 1.67403,0 2.85739,-0.57725 3.60781,-1.443124 h 0.11545 l 0.28863,1.212224 h 3.55008 v -8.831921 c 0,-2.799661 -2.22241,-4.820035 -5.88794,-4.820035 -3.95417,0 -5.7725,2.164686 -5.7725,4.675723 h 3.6944 c 0,-0.80815 0.72156,-1.50085 1.96265,-1.50085 1.47198,0 2.04923,0.721562 2.04923,1.645162 v 0.721562 h -2.88625 c -3.69439,0 -5.39728,1.645162 -5.39728,4.127336 -0.0289,2.395586 1.64516,4.213923 4.67572,4.213923 z m 1.01019,-3.088286 c -1.18336,0 -1.78948,-0.57725 -1.78948,-1.327675 0,-0.721562 0.57725,-1.269949 1.81834,-1.269949 h 2.5399 v 0.57725 c 0,1.067912 -0.95246,2.020374 -2.56876,2.020374 z");
				attr(path4, "class", "st0 svelte-sdid3b");
				attr(path4, "d", "m 205.37017,61.086602 h 3.95417 V 42.066223 h -3.95417 z");
				attr(path5, "class", "st0 svelte-sdid3b");
				attr(path5, "d", "m 152.34979,85.331091 h 4.06961 V 67.349762 h -4.06961 z");
				attr(path6, "class", "st0 svelte-sdid3b");
				attr(path6, "d", "m 158.98816,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45331,-2.626486 1.55857,0 2.25127,0.9236 2.25127,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99151,-4.820035 -4.99321,-4.820035 -1.76061,0 -2.91511,0.634974 -3.66553,1.529712 h -0.11545 l -0.31749,-1.26995 h -3.55008 v 13.392194 z");
				attr(path7, "class", "st0 svelte-sdid3b");
				attr(path7, "d", "m 173.39054,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45331,-2.626486 1.55858,0 2.25128,0.9236 2.25128,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99152,-4.820035 -4.99321,-4.820035 -1.76062,0 -2.91512,0.634974 -3.66554,1.529712 h -0.11545 l -0.31749,-1.26995 h -3.55008 v 13.392194 z");
				attr(path8, "class", "st0 svelte-sdid3b");
				attr(path8, "d", "m 193.85404,85.561991 c 4.35824,0 6.6961,-2.915111 6.6961,-6.926997 0,-4.040748 -2.39559,-6.955859 -6.6961,-6.955859 -4.32937,0 -6.69609,2.915111 -6.69609,6.955859 0,4.011886 2.33786,6.926997 6.69609,6.926997 z m 0,-3.463498 c -1.6163,0 -2.68421,-1.03905 -2.68421,-3.463499 0,-2.424449 1.03905,-3.492361 2.68421,-3.492361 1.64516,0 2.68421,1.03905 2.68421,3.492361 0,2.453311 -1.03905,3.463499 -2.68421,3.463499 z");
				attr(path9, "class", "st0 svelte-sdid3b");
				attr(path9, "d", "m 204.7352,85.331091 h 5.05094 l 4.21392,-13.190156 v -0.259763 h -4.01189 l -2.65535,9.697796 h -0.11545 l -2.71307,-9.697796 h -4.06961 v 0.259763 z");
				attr(path10, "class", "st0 svelte-sdid3b");
				attr(path10, "d", "m 218.58919,85.561991 c 1.67403,0 2.85739,-0.57725 3.60781,-1.443124 h 0.11545 l 0.28863,1.212224 h 3.55009 V 76.49917 c 0,-2.799661 -2.22242,-4.820035 -5.88795,-4.820035 -3.95416,0 -5.7725,2.164686 -5.7725,4.675723 h 3.6944 c 0,-0.80815 0.72156,-1.50085 1.96265,-1.50085 1.47198,0 2.04923,0.721562 2.04923,1.645162 v 0.721562 h -2.88624 c -3.6944,0 -5.39729,1.645162 -5.39729,4.127336 -0.0289,2.395586 1.64516,4.213923 4.67572,4.213923 z m 0.98133,-3.088286 c -1.18336,0 -1.78948,-0.57725 -1.78948,-1.327675 0,-0.721562 0.57725,-1.269949 1.81834,-1.269949 h 2.5399 v 0.57725 c 0,1.067912 -0.9236,2.020374 -2.56876,2.020374 z");
				attr(path11, "class", "st0 svelte-sdid3b");
				attr(path11, "d", "m 233.82859,85.331091 h 2.71307 v -3.434636 h -1.52971 c -1.18336,0 -1.73175,-0.548387 -1.73175,-1.789474 v -4.820035 h 3.20374 v -3.376911 h -3.20374 v -3.521224 h -3.78099 v 3.521224 h -2.36672 v 3.376911 h 2.19355 v 5.772497 c 0,2.424449 1.3854,4.271648 4.50255,4.271648 z");
				attr(path12, "class", "st0 svelte-sdid3b");
				attr(path12, "d", "m 238.33113,70.293735 h 4.21393 V 66.28185 h -4.21393 z m 0.11545,15.037356 h 3.95417 V 71.910035 h -3.95417 z");
				attr(path13, "class", "st0 svelte-sdid3b");
				attr(path13, "d", "m 250.2802,85.561991 c 4.35824,0 6.6961,-2.915111 6.6961,-6.926997 0,-4.040748 -2.39559,-6.955859 -6.6961,-6.955859 -4.32937,0 -6.69609,2.915111 -6.69609,6.955859 0,4.011886 2.33786,6.926997 6.69609,6.926997 z m 0,-3.463498 c -1.61629,0 -2.68421,-1.03905 -2.68421,-3.463499 0,-2.424449 1.03905,-3.492361 2.68421,-3.492361 1.64517,0 2.68422,1.03905 2.68422,3.492361 0,2.453311 -1.03905,3.463499 -2.68422,3.463499 z");
				attr(path14, "class", "st0 svelte-sdid3b");
				attr(path14, "d", "m 258.39056,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45332,-2.626486 1.55857,0 2.25127,0.9236 2.25127,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99151,-4.820035 -4.99321,-4.820035 -1.76061,0 -2.91511,0.634974 -3.66554,1.529712 h -0.0866 l -0.31749,-1.26995 h -3.55009 z");
				attr(path15, "class", "st0 svelte-sdid3b");
				attr(path15, "d", "m 158.64181,109.80648 c 5.39728,0 7.50424,-2.309 7.50424,-5.51273 0,-3.52123 -2.53989,-4.877765 -5.88794,-5.570465 L 157.8048,98.20376 c -1.67403,-0.34635 -2.02038,-0.981324 -2.02038,-1.674024 0,-0.750425 0.72156,-1.558574 2.82853,-1.558574 2.13582,0 3.03056,1.067912 3.14601,2.251274 h 4.09847 c -0.0289,-3.434636 -3.05942,-5.859085 -7.1579,-5.859085 -4.24278,0 -7.01358,2.135824 -7.01358,5.166385 0,3.434636 2.45331,4.733444 5.5416,5.397284 l 2.62648,0.57725 c 1.58744,0.34635 2.19355,0.9236 2.19355,1.90492 0,1.06792 -0.89474,1.8472 -3.37691,1.8472 -1.96265,0 -3.31919,-0.86587 -3.49236,-2.82852 h -4.09847 c 0.2309,3.86757 2.7708,6.37861 7.56197,6.37861 z");
				attr(path16, "class", "st0 svelte-sdid3b");
				attr(path16, "d", "m 173.47713,109.57558 h 2.71307 v -3.43464 h -1.52971 c -1.18336,0 -1.73175,-0.54838 -1.73175,-1.78947 v -4.820035 h 3.20374 v -3.376911 h -3.20374 V 92.6333 h -3.78099 v 3.521224 h -2.36672 v 3.376911 h 2.19355 v 5.772495 c 0,2.42445 1.3854,4.27165 4.50255,4.27165 z");
				attr(path17, "class", "st0 svelte-sdid3b");
				attr(path17, "d", "m 178.12399,109.57558 h 3.6944 v -6.63837 c 0,-2.16469 1.21222,-3.405775 3.08828,-3.405775 h 1.29881 v -3.607811 h -0.9236 c -1.73175,0 -2.85738,1.010187 -3.43463,2.193549 h -0.11545 l -0.31749,-1.962649 h -3.29032 z");
				attr(path18, "class", "st0 svelte-sdid3b");
				attr(path18, "d", "m 191.25642,109.80648 c 1.67402,0 2.85738,-0.57725 3.60781,-1.44312 h 0.11545 l 0.28862,1.21222 h 3.55009 v -8.83192 c 0,-2.799662 -2.22241,-4.820036 -5.88795,-4.820036 -3.95416,0 -5.77249,2.164686 -5.77249,4.675726 h 3.69439 c 0,-0.808153 0.72157,-1.500853 1.96265,-1.500853 1.47199,0 2.04924,0.721563 2.04924,1.645163 v 0.72156 h -2.88625 c -3.6944,0 -5.39728,1.64516 -5.39728,4.12734 -0.0289,2.39558 1.64516,4.21392 4.67572,4.21392 z m 1.01019,-3.08829 c -1.18337,0 -1.78948,-0.57725 -1.78948,-1.32767 0,-0.72156 0.57725,-1.29881 1.81834,-1.29881 h 2.5399 v 0.57725 c 0,1.09677 -0.95247,2.04923 -2.56876,2.04923 z");
				attr(path19, "class", "st0 svelte-sdid3b");
				attr(path19, "d", "m 206.49581,109.57558 h 2.71308 v -3.43464 h -1.52972 c -1.18336,0 -1.73175,-0.54838 -1.73175,-1.78947 v -4.820035 h 3.20374 v -3.376911 h -3.20374 V 92.6333 h -3.78098 v 3.521224 h -2.36673 v 3.376911 h 2.19355 v 5.772495 c 0,2.42445 1.3854,4.27165 4.50255,4.27165 z");
				attr(path20, "class", "st0 svelte-sdid3b");
				attr(path20, "d", "m 217.14607,109.80648 c 3.66554,0 5.80136,-2.13582 6.17657,-4.56027 h -3.83871 c -0.2309,0.60611 -0.86587,1.32767 -2.33786,1.32767 -1.78947,0 -2.59762,-1.09677 -2.62649,-2.68421 h 8.97624 v -1.47199 c 0,-3.63667 -2.309,-6.551781 -6.40748,-6.551781 -4.35823,0 -6.58064,3.146011 -6.58064,6.955861 0,3.89643 2.39558,6.98472 6.63837,6.98472 z m -2.59762,-8.37012 c 0.0866,-1.26995 0.80815,-2.280138 2.51103,-2.280138 1.55858,0 2.309,1.010188 2.39559,2.280138 z");
				attr(path21, "class", "st0 svelte-sdid3b");
				attr(path21, "d", "m 230.7403,115.69443 c 3.75212,0 6.58065,-2.10696 6.58065,-5.48388 V 96.125661 h -3.55009 l -0.40407,1.298812 h -0.11545 c -0.63498,-0.779287 -1.67403,-1.529712 -3.57895,-1.529712 -3.37691,0 -5.45501,2.915111 -5.45501,6.955859 0,4.01189 2.04924,6.927 5.45501,6.927 1.90492,0 2.91511,-0.75043 3.57895,-1.52971 h 0.11545 v 1.87606 c 0,1.21222 -0.86588,2.13582 -2.62649,2.13582 -1.24109,0 -2.13582,-0.66384 -2.22241,-1.55857 h -3.86757 c 0.0577,3.05942 2.48217,4.99321 6.08998,4.99321 z m 0.17318,-9.35145 c -1.99152,0 -2.65535,-1.58744 -2.65535,-3.4635 0,-1.87606 0.6927,-3.492358 2.65535,-3.492358 1.96264,0 2.65534,1.616298 2.65534,3.492358 0,1.87606 -0.66383,3.4635 -2.65534,3.4635 z");
				attr(path22, "class", "st0 svelte-sdid3b");
				attr(path22, "d", "m 238.99497,94.538224 h 4.21392 v -4.011885 h -4.21392 z m 0.14431,15.037356 h 3.95417 V 96.154524 h -3.95417 z");
				attr(path23, "class", "st0 svelte-sdid3b");
				attr(path23, "d", "m 250.91518,109.80648 c 3.66553,0 5.80136,-2.13582 6.17657,-4.56027 h -3.83871 c -0.2309,0.60611 -0.86587,1.32767 -2.33786,1.32767 -1.78948,0 -2.59762,-1.09677 -2.62649,-2.68421 h 8.97624 v -1.47199 c 0,-3.63667 -2.309,-6.551781 -6.40748,-6.551781 -4.35823,0 -6.58064,3.146011 -6.58064,6.955861 -0.0289,3.89643 2.39558,6.98472 6.63837,6.98472 z m -2.59762,-8.37012 c 0.0866,-1.26995 0.80814,-2.280138 2.51103,-2.280138 1.55858,0 2.309,1.010188 2.39559,2.280138 z");
				attr(path24, "class", "st0 svelte-sdid3b");
				attr(path24, "d", "m 263.96102,109.80648 c 3.40578,0 5.88795,-1.52971 5.88795,-4.30051 0,-2.82852 -1.93379,-3.78099 -3.98302,-4.1562 l -2.56876,-0.49066 c -0.63498,-0.11545 -1.01019,-0.40408 -1.01019,-0.923601 0,-0.519524 0.57725,-0.923599 1.55857,-0.923599 1.32768,0 1.78948,0.779287 1.76061,1.3854 h 3.89644 c 0,-2.482175 -2.10696,-4.502549 -5.59932,-4.502549 -3.60781,0 -5.51274,1.789475 -5.51274,3.983024 0,2.684215 1.96265,3.809845 4.09848,4.213925 l 1.99151,0.37521 c 0.9236,0.17317 1.35653,0.4618 1.35653,1.03905 0,0.4618 -0.49066,0.98132 -1.90492,0.98132 -1.41426,0 -1.99151,-0.75042 -1.99151,-1.50085 h -3.95416 c 0.0866,2.79967 1.78947,4.82004 5.97453,4.82004 z");
				attr(path25, "class", "st0 svelte-sdid3b");
				attr(path25, "d", "m 278.44999,109.57558 h 4.06961 V 91.594251 h -4.06961 z");
				attr(path26, "class", "st0 svelte-sdid3b");
				attr(path26, "d", "m 285.08836,109.57558 h 3.95416 v -7.44652 c 0,-1.6163 1.03905,-2.626488 2.45332,-2.626488 1.55857,0 2.25127,0.923598 2.25127,2.453308 v 7.6197 h 3.95416 v -8.83192 c 0,-2.943975 -1.99151,-4.820036 -4.99321,-4.820036 -1.76061,0 -2.91511,0.634975 -3.66554,1.529712 h -0.11545 l -0.31748,-1.298812 h -3.55009 v 13.421056 z");
				attr(path27, "class", "st0 svelte-sdid3b");
				attr(path27, "d", "m 305.60959,109.80648 c 3.89644,0 5.94567,-2.42445 6.11885,-5.51273 h -3.98302 c -0.11545,1.18336 -0.95247,2.04923 -2.22242,2.04923 -1.67402,0 -2.62648,-1.03905 -2.62648,-3.49236 0,-2.42445 0.95246,-3.463498 2.62648,-3.463498 1.29882,0 2.10697,0.865878 2.22242,2.049238 h 3.98302 c -0.17318,-3.11715 -2.22241,-5.512736 -6.20544,-5.512736 -4.30051,0 -6.63837,2.886248 -6.63837,6.926996 -0.0289,4.06961 2.42445,6.95586 6.72496,6.95586 z");
				attr(path28, "class", "st0 svelte-sdid3b");
				attr(path28, "d", "m 312.85408,109.57558 h 4.21392 v -4.01189 h -4.21392 z");
				attr(g, "class", "text-group svelte-sdid3b");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e");
				attr(g, "opacity", "1.0");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				append(g, path2);
				append(g, path3);
				append(g, path4);
				append(g, path5);
				append(g, path6);
				append(g, path7);
				append(g, path8);
				append(g, path9);
				append(g, path10);
				append(g, path11);
				append(g, path12);
				append(g, path13);
				append(g, path14);
				append(g, path15);
				append(g, path16);
				append(g, path17);
				append(g, path18);
				append(g, path19);
				append(g, path20);
				append(g, path21);
				append(g, path22);
				append(g, path23);
				append(g, path24);
				append(g, path25);
				append(g, path26);
				append(g, path27);
				append(g, path28);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}
			},
			i(local) {
				if (current) return;

				add_render_callback(() => {
					if (g_outro) g_outro.end(1);
					if (!g_intro) g_intro = create_in_transition(g, fade, { duration: text_render_duration$3 });
					g_intro.start();
				});

				current = true;
			},
			o(local) {
				if (g_intro) g_intro.invalidate();
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (751:32) {#if (!!cori_rendered)}
	function create_if_block_5$2(ctx) {
		let g;
		let path0;
		let path1;
		let g_fill_value;
		let g_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { class: true, fill: true, opacity: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "d", "M126.863 55.99c3.466 0 5.764-2.38 6.037-5.188h-3.096c-.234 1.287-1.11 2.438-2.941 2.438-2.259 0-3.486-1.482-3.486-4.231 0-2.75 1.227-4.251 3.486-4.251 1.909 0 2.804 1.248 2.921 2.554h3.116c-.195-2.886-2.551-5.323-6.037-5.323-4.382 0-6.602 3.08-6.602 7.02 0 3.88 2.22 6.98 6.602 6.98z");
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "d", "M138.625 55.99c2.785 0 4.401-1.62 4.674-3.452h-2.902c-.175.468-.662 1.014-1.772 1.014-1.363 0-1.967-.839-1.986-2.028h6.796v-1.111c0-2.77-1.753-4.973-4.868-4.973-3.311 0-4.986 2.399-4.986 5.285 0 2.924 1.831 5.264 5.044 5.264zm-1.967-6.357c.059-.975.623-1.736 1.909-1.736 1.187 0 1.752.76 1.811 1.736h-3.72zM144.5 55.814h2.999v-5.655c0-1.228.778-1.989 1.85-1.989 1.187 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974H144.5v10.198zM159.904 55.814h2.065V53.2H160.8c-.896 0-1.304-.41-1.304-1.365V48.17h2.434v-2.554h-2.434v-2.672h-2.863v2.672h-1.792v2.554h1.656v4.387c0 1.853 1.051 3.257 3.407 3.257zM167.98 55.99c2.784 0 4.401-1.62 4.673-3.452h-2.901c-.176.468-.662 1.014-1.772 1.014-1.364 0-1.967-.839-1.987-2.028h6.797v-1.111c0-2.77-1.753-4.973-4.869-4.973-3.31 0-4.985 2.399-4.985 5.285 0 2.924 1.83 5.264 5.044 5.264zm-1.967-6.357c.058-.975.623-1.736 1.908-1.736 1.188 0 1.753.76 1.811 1.736h-3.719zM173.854 55.814h2.804v-5.031c0-1.638.916-2.593 2.337-2.593h.974v-2.75h-.701c-1.305 0-2.162.76-2.61 1.658h-.078l-.233-1.482h-2.493v10.198zM125.247 74.393c3.31 0 5.082-2.223 5.082-5.265 0-3.061-1.811-5.284-5.082-5.284-3.272 0-5.083 2.223-5.083 5.284s1.772 5.265 5.083 5.265zm0-2.633c-1.227 0-2.026-.78-2.026-2.632 0-1.833.779-2.652 2.026-2.652 1.246 0 2.025.8 2.025 2.652s-.779 2.632-2.025 2.632zM131.406 74.217h2.999v-5.655c0-1.228.779-1.988 1.85-1.988 1.188 0 1.713.701 1.713 1.871v5.772h2.999V67.51c0-2.243-1.519-3.666-3.778-3.666-1.324 0-2.22.487-2.784 1.15h-.078l-.234-.975h-2.687v10.198zM155.988 69.03c1.655-.663 2.687-2.145 2.687-4.114 0-2.32-1.752-4.348-4.654-4.348h-6.231v13.65h3.057V69.4h1.908l2.941 4.816h3.583v-.195l-3.291-4.992zm-5.141-5.732h3.018c1.188 0 1.675.819 1.675 1.638 0 .858-.448 1.735-1.675 1.735h-3.018v-3.373zM163.835 74.393c1.324 0 2.22-.488 2.784-1.15h.078l.234.974h2.687V64.02h-2.999v5.655c0 1.228-.779 1.989-1.85 1.989-1.188 0-1.713-.702-1.713-1.872v-5.772h-2.999v6.708c0 2.242 1.519 3.666 3.778 3.666zM170.944 74.217h2.805v-5.03c0-1.638.915-2.594 2.337-2.594h.973v-2.75h-.701c-1.305 0-2.161.761-2.609 1.658h-.078l-.234-1.482h-2.493v10.198zM180.916 74.393c1.265 0 2.161-.449 2.726-1.092h.078l.214.916h2.687V67.51c0-2.126-1.674-3.666-4.459-3.666-2.999 0-4.382 1.638-4.382 3.548h2.805c0-.623.545-1.13 1.48-1.13 1.11 0 1.557.546 1.557 1.248v.545h-2.181c-2.804 0-4.089 1.248-4.089 3.14 0 1.813 1.266 3.198 3.564 3.198zm.759-2.34c-.896 0-1.363-.43-1.363-1.014 0-.546.428-.975 1.383-.975h1.927v.429c0 .838-.72 1.56-1.947 1.56zM187.985 74.217h2.999V59.788h-2.999v14.43zM121.04 92.62h3.077V78.972h-3.077v13.65zM126.062 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974h-2.687V92.62zM136.988 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974h-2.687V92.62zM152.509 92.796c3.311 0 5.083-2.223 5.083-5.265 0-3.061-1.811-5.284-5.083-5.284-3.271 0-5.082 2.223-5.082 5.284 0 3.062 1.772 5.265 5.082 5.265zm0-2.632c-1.226 0-2.025-.78-2.025-2.633 0-1.833.779-2.652 2.025-2.652 1.247 0 2.026.8 2.026 2.652 0 1.853-.779 2.633-2.026 2.633zM160.742 92.62h3.836l3.194-10.002v-.195h-3.038l-2.006 7.37h-.078l-2.064-7.37h-3.077v.195l3.233 10.003zM171.245 92.796c1.266 0 2.161-.449 2.726-1.092h.078l.214.917h2.688v-6.708c0-2.126-1.675-3.666-4.46-3.666-2.999 0-4.381 1.638-4.381 3.549h2.804c0-.624.545-1.131 1.48-1.131 1.11 0 1.558.546 1.558 1.248v.546h-2.181c-2.805 0-4.09 1.248-4.09 3.14 0 1.813 1.266 3.197 3.564 3.197zm.759-2.34c-.896 0-1.363-.429-1.363-1.014 0-.546.429-.975 1.383-.975h1.928v.43c0 .838-.721 1.56-1.948 1.56zM182.793 92.62h2.064v-2.612h-1.168c-.896 0-1.305-.41-1.305-1.365v-3.666h2.434v-2.554h-2.434V79.75h-2.862v2.672h-1.792v2.554h1.655v4.387c0 1.853 1.052 3.257 3.408 3.257zM186.214 81.214h3.194v-3.042h-3.194v3.042zm.097 11.407h2.999V82.423h-2.999V92.62zM195.272 92.796c3.311 0 5.083-2.223 5.083-5.265 0-3.061-1.811-5.284-5.083-5.284-3.272 0-5.083 2.223-5.083 5.284 0 3.062 1.773 5.265 5.083 5.265zm0-2.632c-1.227 0-2.025-.78-2.025-2.633 0-1.833.779-2.652 2.025-2.652s2.025.8 2.025 2.652c0 1.853-.779 2.633-2.025 2.633zM201.431 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.714.702 1.714 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.785 1.15h-.078l-.234-.974h-2.687V92.62z");
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "class", "text-group svelte-sdid3b");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e");
				attr(g, "opacity", "1.0");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}
			},
			i(local) {
				if (current) return;

				add_render_callback(() => {
					if (g_outro) g_outro.end(1);
					if (!g_intro) g_intro = create_in_transition(g, fade, { duration: text_render_duration$3 });
					g_intro.start();
				});

				current = true;
			},
			o(local) {
				if (g_intro) g_intro.invalidate();
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (828:49) 
	function create_if_block_4$3(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path1;
		let path1_style_value;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						opacity: true,
						transform: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);

				path0 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path0).forEach(detach);

				path1 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "none");

				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text);
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "fill", "none");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path1, "d", shape);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.75");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (815:67) 
	function create_if_block_3$3(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path0_intro;
		let path1;
		let path1_style_value;
		let path1_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						opacity: true,
						transform: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text);
				attr(path0, "class", "svelte-sdid3b");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;");

				attr(path1, "d", shape);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.5");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration$3,
							delay: shape_render_duration$3,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration$3 });
						path1_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (804:49) 
	function create_if_block_2$3(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path1;
		let path1_style_value;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, class: true }, 1);
				var g_nodes = children(g);

				path0 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path0).forEach(detach);

				path1 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "none");

				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "fill", "none");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.75");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (791:28) {#if !hide_cori && !cori_rendered}
	function create_if_block_1$4(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path0_intro;
		let path1;
		let path1_style_value;
		let path1_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, class: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-sdid3b");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;");

				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.5");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 1 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[0]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[0]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration$3,
							delay: shape_render_duration$3,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration$3 });
						path1_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$3 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	function create_fragment$6(ctx) {
		let header;
		let div4;
		let div3;
		let div2;
		let div0;
		let svg0;
		let path0;
		let path0_fill_value;
		let t0;
		let t1;
		let nav;
		let ul;
		let li0;
		let a0;
		let t2;
		let button0;
		let span0;
		let t3;
		let t4;
		let li1;
		let a1;
		let t5;
		let button1;
		let span1;
		let t6;
		let t7;
		let li2;
		let a2;
		let t8;
		let button2;
		let span2;
		let t9;
		let t10;
		let li3;
		let a3;
		let t11;
		let button3;
		let span3;
		let t12;
		let t13;
		let li4;
		let a4;
		let t14;
		let button4;
		let span4;
		let t15;
		let t16;
		let div1;
		let a5;
		let span9;
		let span6;
		let span5;
		let t17;
		let t18;
		let span8;
		let span7;
		let t19;
		let t20;
		let span13;
		let span12;
		let span10;
		let svg1;
		let g;
		let rect0;
		let rect1;
		let rect2;
		let g_fill_value;
		let defs;
		let clipPath;
		let path1;
		let t21;
		let span11;
		let svg2;
		let path2;
		let path2_fill_value;
		let span13_class_value;
		let div2_class_value;
		let div3_class_value;
		let div4_class_value;
		let header_class_value;
		let t22;
		let br0;
		let t23;
		let br1;
		let current;
		let mounted;
		let dispose;
		let if_block = !!/*logo_visible*/ ctx[2] && create_if_block$5(ctx);

		return {
			c() {
				header = element("header");
				div4 = element("div");
				div3 = element("div");
				div2 = element("div");
				div0 = element("div");
				svg0 = svg_element("svg");
				path0 = svg_element("path");
				t0 = space();
				if (if_block) if_block.c();
				t1 = space();
				nav = element("nav");
				ul = element("ul");
				li0 = element("li");
				a0 = element("a");
				t2 = text$2("About");
				button0 = element("button");
				span0 = element("span");
				t3 = text$2("Show submenu for “About”");
				t4 = space();
				li1 = element("li");
				a1 = element("a");
				t5 = text$2("Apps & Data");
				button1 = element("button");
				span1 = element("span");
				t6 = text$2("Show submenu for “Apps & Data”");
				t7 = space();
				li2 = element("li");
				a2 = element("a");
				t8 = text$2("Docs & How To's");
				button2 = element("button");
				span2 = element("span");
				t9 = text$2("Show submenu for “Docs & How To's”");
				t10 = space();
				li3 = element("li");
				a3 = element("a");
				t11 = text$2("Project Mgmt");
				button3 = element("button");
				span3 = element("span");
				t12 = text$2("Show submenu for “Project Mgmt”");
				t13 = space();
				li4 = element("li");
				a4 = element("a");
				t14 = text$2("Past Work (Gallery)");
				button4 = element("button");
				span4 = element("span");
				t15 = text$2("Show submenu for “Past Work (Gallery)”");
				t16 = space();
				div1 = element("div");
				a5 = element("a");
				span9 = element("span");
				span6 = element("span");
				span5 = element("span");
				t17 = text$2("Site Menu");
				t18 = space();
				span8 = element("span");
				span7 = element("span");
				t19 = text$2("Close Menu");
				t20 = space();
				span13 = element("span");
				span12 = element("span");
				span10 = element("span");
				svg1 = svg_element("svg");
				g = svg_element("g");
				rect0 = svg_element("rect");
				rect1 = svg_element("rect");
				rect2 = svg_element("rect");
				defs = svg_element("defs");
				clipPath = svg_element("clipPath");
				path1 = svg_element("path");
				t21 = space();
				span11 = element("span");
				svg2 = svg_element("svg");
				path2 = svg_element("path");
				t22 = space();
				br0 = element("br");
				t23 = space();
				br1 = element("br");
				this.h();
			},
			l(nodes) {
				header = claim_element(nodes, "HEADER", { id: true, class: true, style: true });
				var header_nodes = children(header);
				div4 = claim_element(header_nodes, "DIV", { class: true });
				var div4_nodes = children(div4);
				div3 = claim_element(div4_nodes, "DIV", { class: true });
				var div3_nodes = children(div3);
				div2 = claim_element(div3_nodes, "DIV", { class: true });
				var div2_nodes = children(div2);
				div0 = claim_element(div2_nodes, "DIV", { class: true });
				var div0_nodes = children(div0);

				svg0 = claim_element(
					div0_nodes,
					"svg",
					{
						class: true,
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true
					},
					1
				);

				var svg0_nodes = children(svg0);
				path0 = claim_element(svg0_nodes, "path", { class: true, fill: true, d: true }, 1);
				children(path0).forEach(detach);
				svg0_nodes.forEach(detach);
				t0 = claim_space(div0_nodes);
				if (if_block) if_block.l(div0_nodes);
				div0_nodes.forEach(detach);
				t1 = claim_space(div2_nodes);

				nav = claim_element(div2_nodes, "NAV", {
					class: true,
					"data-itemcount": true,
					"data-textlength": true,
					role: true,
					"aria-label": true
				});

				var nav_nodes = children(nav);
				ul = claim_element(nav_nodes, "UL", { id: true, class: true });
				var ul_nodes = children(ul);

				li0 = claim_element(ul_nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li0_nodes = children(li0);
				a0 = claim_element(li0_nodes, "A", { href: true, role: true, class: true });
				var a0_nodes = children(a0);
				t2 = claim_text(a0_nodes, "About");
				a0_nodes.forEach(detach);
				button0 = claim_element(li0_nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button0_nodes = children(button0);
				span0 = claim_element(button0_nodes, "SPAN", { class: true });
				var span0_nodes = children(span0);
				t3 = claim_text(span0_nodes, "Show submenu for “About”");
				span0_nodes.forEach(detach);
				button0_nodes.forEach(detach);
				li0_nodes.forEach(detach);
				t4 = claim_space(ul_nodes);

				li1 = claim_element(ul_nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li1_nodes = children(li1);
				a1 = claim_element(li1_nodes, "A", { href: true, role: true, class: true });
				var a1_nodes = children(a1);
				t5 = claim_text(a1_nodes, "Apps & Data");
				a1_nodes.forEach(detach);
				button1 = claim_element(li1_nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button1_nodes = children(button1);
				span1 = claim_element(button1_nodes, "SPAN", { class: true });
				var span1_nodes = children(span1);
				t6 = claim_text(span1_nodes, "Show submenu for “Apps & Data”");
				span1_nodes.forEach(detach);
				button1_nodes.forEach(detach);
				li1_nodes.forEach(detach);
				t7 = claim_space(ul_nodes);

				li2 = claim_element(ul_nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li2_nodes = children(li2);
				a2 = claim_element(li2_nodes, "A", { href: true, role: true, class: true });
				var a2_nodes = children(a2);
				t8 = claim_text(a2_nodes, "Docs & How To's");
				a2_nodes.forEach(detach);
				button2 = claim_element(li2_nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button2_nodes = children(button2);
				span2 = claim_element(button2_nodes, "SPAN", { class: true });
				var span2_nodes = children(span2);
				t9 = claim_text(span2_nodes, "Show submenu for “Docs & How To's”");
				span2_nodes.forEach(detach);
				button2_nodes.forEach(detach);
				li2_nodes.forEach(detach);
				t10 = claim_space(ul_nodes);

				li3 = claim_element(ul_nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li3_nodes = children(li3);
				a3 = claim_element(li3_nodes, "A", { href: true, role: true, class: true });
				var a3_nodes = children(a3);
				t11 = claim_text(a3_nodes, "Project Mgmt");
				a3_nodes.forEach(detach);
				button3 = claim_element(li3_nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button3_nodes = children(button3);
				span3 = claim_element(button3_nodes, "SPAN", { class: true });
				var span3_nodes = children(span3);
				t12 = claim_text(span3_nodes, "Show submenu for “Project Mgmt”");
				span3_nodes.forEach(detach);
				button3_nodes.forEach(detach);
				li3_nodes.forEach(detach);
				t13 = claim_space(ul_nodes);

				li4 = claim_element(ul_nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li4_nodes = children(li4);
				a4 = claim_element(li4_nodes, "A", { href: true, role: true, class: true });
				var a4_nodes = children(a4);
				t14 = claim_text(a4_nodes, "Past Work (Gallery)");
				a4_nodes.forEach(detach);
				button4 = claim_element(li4_nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button4_nodes = children(button4);
				span4 = claim_element(button4_nodes, "SPAN", { class: true });
				var span4_nodes = children(span4);
				t15 = claim_text(span4_nodes, "Show submenu for “Past Work (Gallery)”");
				span4_nodes.forEach(detach);
				button4_nodes.forEach(detach);
				li4_nodes.forEach(detach);
				ul_nodes.forEach(detach);
				nav_nodes.forEach(detach);
				t16 = claim_space(div2_nodes);
				div1 = claim_element(div2_nodes, "DIV", { class: true });
				var div1_nodes = children(div1);

				a5 = claim_element(div1_nodes, "A", {
					href: true,
					class: true,
					role: true,
					labelledby: true
				});

				var a5_nodes = children(a5);
				span9 = claim_element(a5_nodes, "SPAN", { id: true, class: true });
				var span9_nodes = children(span9);
				span6 = claim_element(span9_nodes, "SPAN", { class: true });
				var span6_nodes = children(span6);
				span5 = claim_element(span6_nodes, "SPAN", { class: true });
				var span5_nodes = children(span5);
				t17 = claim_text(span5_nodes, "Site Menu");
				span5_nodes.forEach(detach);
				span6_nodes.forEach(detach);
				t18 = claim_space(span9_nodes);
				span8 = claim_element(span9_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span8_nodes = children(span8);
				span7 = claim_element(span8_nodes, "SPAN", { class: true });
				var span7_nodes = children(span7);
				t19 = claim_text(span7_nodes, "Close Menu");
				span7_nodes.forEach(detach);
				span8_nodes.forEach(detach);
				span9_nodes.forEach(detach);
				t20 = claim_space(a5_nodes);
				span13 = claim_element(a5_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span13_nodes = children(span13);
				span12 = claim_element(span13_nodes, "SPAN", { class: true });
				var span12_nodes = children(span12);
				span10 = claim_element(span12_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span10_nodes = children(span10);

				svg1 = claim_element(
					span10_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg1_nodes = children(svg1);

				g = claim_element(
					svg1_nodes,
					"g",
					{
						"clip-path": true,
						fill: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);

				rect0 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect0).forEach(detach);

				rect1 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect1).forEach(detach);

				rect2 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect2).forEach(detach);
				g_nodes.forEach(detach);
				defs = claim_element(svg1_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);
				clipPath = claim_element(defs_nodes, "clipPath", { id: true, class: true }, 1);
				var clipPath_nodes = children(clipPath);

				path1 = claim_element(
					clipPath_nodes,
					"path",
					{
						fill: true,
						transform: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				clipPath_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				svg1_nodes.forEach(detach);
				span10_nodes.forEach(detach);
				t21 = claim_space(span12_nodes);
				span11 = claim_element(span12_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span11_nodes = children(span11);

				svg2 = claim_element(
					span11_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg2_nodes = children(svg2);

				path2 = claim_element(
					svg2_nodes,
					"path",
					{
						d: true,
						fill: true,
						stroke: true,
						"stroke-width": true,
						class: true
					},
					1
				);

				children(path2).forEach(detach);
				svg2_nodes.forEach(detach);
				span11_nodes.forEach(detach);
				span12_nodes.forEach(detach);
				span13_nodes.forEach(detach);
				a5_nodes.forEach(detach);
				div1_nodes.forEach(detach);
				div2_nodes.forEach(detach);
				div3_nodes.forEach(detach);
				div4_nodes.forEach(detach);
				header_nodes.forEach(detach);
				t22 = claim_space(nodes);
				br0 = claim_element(nodes, "BR", { class: true });
				t23 = claim_space(nodes);
				br1 = claim_element(nodes, "BR", { class: true });
				this.h();
			},
			h() {
				attr(path0, "class", "border svelte-sdid3b");

				attr(path0, "fill", path0_fill_value = !!/*light_on_dark*/ ctx[0]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9");

				attr(path0, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(svg0, "class", "logo-border svelte-sdid3b");
				attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg0, "width", "308");
				attr(svg0, "height", "136");
				attr(svg0, "viewBox", "0 0 308 136");
				attr(svg0, "fill", "none");
				set_style(svg0, "background-color", "transparent");
				attr(div0, "class", "site-header__item site-header__main-logo col-auto svelte-sdid3b");
				attr(a0, "href", "#about/");
				attr(a0, "role", "menuitem");
				attr(a0, "class", " top-level-nav-link svelte-sdid3b");
				attr(span0, "class", "screen-reader-text svelte-sdid3b");
				attr(button0, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button0, "aria-haspopup", "true");
				attr(li0, "id", "menu-item-12");
				attr(li0, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item svelte-sdid3b");
				attr(li0, "aria-haspopup", "true");
				attr(a1, "href", "#applications/");
				attr(a1, "role", "menuitem");
				attr(a1, "class", " top-level-nav-link svelte-sdid3b");
				attr(span1, "class", "screen-reader-text svelte-sdid3b");
				attr(button1, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button1, "aria-haspopup", "true");
				attr(li1, "id", "menu-item-13");
				attr(li1, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-13 col-auto top-level-menu-item svelte-sdid3b");
				attr(li1, "aria-haspopup", "true");
				attr(a2, "href", "#documentation/");
				attr(a2, "role", "menuitem");
				attr(a2, "class", " top-level-nav-link svelte-sdid3b");
				attr(span2, "class", "screen-reader-text svelte-sdid3b");
				attr(button2, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button2, "aria-haspopup", "true");
				attr(li2, "id", "menu-item-14");
				attr(li2, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-14 col-auto top-level-menu-item svelte-sdid3b");
				attr(li2, "aria-haspopup", "true");
				attr(a3, "href", "#project/");
				attr(a3, "role", "menuitem");
				attr(a3, "class", " top-level-nav-link svelte-sdid3b");
				attr(span3, "class", "screen-reader-text svelte-sdid3b");
				attr(button3, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button3, "aria-haspopup", "true");
				attr(li3, "id", "menu-item-15");
				attr(li3, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-14 col-auto top-level-menu-item svelte-sdid3b");
				attr(li3, "aria-haspopup", "true");
				attr(a4, "href", "#past/");
				attr(a4, "role", "menuitem");
				attr(a4, "class", " top-level-nav-link svelte-sdid3b");
				attr(span4, "class", "screen-reader-text svelte-sdid3b");
				attr(button4, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button4, "aria-haspopup", "true");
				attr(li4, "id", "menu-item-16");
				attr(li4, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-14 col-auto top-level-menu-item svelte-sdid3b");
				attr(li4, "aria-haspopup", "true");
				attr(ul, "id", "primary-navigation");
				attr(ul, "class", "row menu justify-content-start site-header__item_inner has-dropdowns has-aria-dropdowns svelte-sdid3b");
				attr(nav, "class", "site-header__item site-header__menu-section col-auto site-header__primary-menu  over-four-items over-fourty-characters svelte-sdid3b");
				attr(nav, "data-itemcount", "5");
				attr(nav, "data-textlength", "42");
				attr(nav, "role", "navigation");
				attr(nav, "aria-label", "Primary Navigation");
				attr(span5, "class", "screen-reader-text svelte-sdid3b");
				attr(span6, "class", "hamburger-control__open-label svelte-sdid3b");
				attr(span7, "class", "screen-reader-text svelte-sdid3b");
				attr(span8, "class", "hamburger-control__close-label svelte-sdid3b");
				attr(span8, "aria-hidden", "true");
				attr(span9, "id", "mm-label");
				attr(span9, "class", "hamburger-control__label svelte-sdid3b");
				attr(rect0, "y", ".5");
				attr(rect0, "width", "20");
				attr(rect0, "height", "3");
				attr(rect0, "rx", "1.5");
				attr(rect0, "class", "svelte-sdid3b");
				attr(rect1, "y", "7.5");
				attr(rect1, "width", "20");
				attr(rect1, "height", "3");
				attr(rect1, "rx", "1.5");
				attr(rect1, "class", "svelte-sdid3b");
				attr(rect2, "y", "14.5");
				attr(rect2, "width", "20");
				attr(rect2, "height", "3");
				attr(rect2, "rx", "1.5");
				attr(rect2, "class", "svelte-sdid3b");
				attr(g, "clip-path", "url(#clip0)");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e");
				attr(g, "class", "svelte-sdid3b");
				attr(path1, "fill", "#fff");
				attr(path1, "transform", "translate(0 .5)");
				attr(path1, "d", "M0 0h20v17H0z");
				attr(path1, "class", "svelte-sdid3b");
				attr(clipPath, "id", "clip0");
				attr(clipPath, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(svg1, "class", "menu svelte-sdid3b");
				attr(svg1, "width", "20");
				attr(svg1, "height", "18");
				attr(svg1, "viewBox", "0 0 20 18");
				attr(svg1, "fill", "none");
				attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
				attr(span10, "class", "hamburger-control__open svelte-sdid3b");
				attr(span10, "aria-hidden", "true");
				attr(path2, "d", "M3.304 20.801L11 13.104l7.698 7.697c.296.297.671.449 1.052.449.38 0 .756-.152 1.052-.449a1.459 1.459 0 000-2.104L13.104 11 20.8 3.303a1.459 1.459 0 000-2.104 1.46 1.46 0 00-2.104 0h0L11 8.898 3.301 1.2a1.46 1.46 0 00-2.103 0h0a1.46 1.46 0 000 2.104L8.834 11 1.2 18.697s0 0 0 0a1.458 1.458 0 00-.012 2.092c.255.326.713.461 1.064.461.38 0 .756-.152 1.052-.449h0z");
				attr(path2, "fill", path2_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e");
				attr(path2, "stroke", "#16343e");
				attr(path2, "stroke-width", ".5");
				attr(path2, "class", "svelte-sdid3b");
				attr(svg2, "class", "menu-close svelte-sdid3b");
				attr(svg2, "width", "22");
				attr(svg2, "height", "22");
				attr(svg2, "viewBox", "0 0 22 22");
				attr(svg2, "fill", "none");
				attr(svg2, "xmlns", "http://www.w3.org/2000/svg");
				attr(span11, "class", "hamburger-control__close svelte-sdid3b");
				attr(span11, "aria-hidden", "true");
				attr(span12, "class", "hamburger-control__inner svelte-sdid3b");

				attr(span13, "class", span13_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"));

				attr(span13, "aria-hidden", "true");
				attr(a5, "href", "#primary-footer-menu-section");
				attr(a5, "class", "mobile-menu-toggle__control js-mobile-menu-control js-open-main-menu svelte-sdid3b");
				attr(a5, "role", "button");
				attr(a5, "labelledby", "mm-label");
				attr(div1, "class", "site-header__item mobile-menu-toggle col svelte-sdid3b");

				attr(div2, "class", div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"));

				attr(div3, "class", div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"));

				attr(div4, "class", div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"));

				attr(header, "id", "desktop-header");

				attr(header, "class", header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"));

				set_style(header, "position", "fixed");
				set_style(header, "max-width", "100%");
				set_style(header, "max-height", "108px");
				set_style(header, "height", "75px");
				set_style(header, "z-index", "1");
				attr(br0, "class", "svelte-sdid3b");
				attr(br1, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, header, anchor);
				append(header, div4);
				append(div4, div3);
				append(div3, div2);
				append(div2, div0);
				append(div0, svg0);
				append(svg0, path0);
				append(div0, t0);
				if (if_block) if_block.m(div0, null);
				append(div2, t1);
				append(div2, nav);
				append(nav, ul);
				append(ul, li0);
				append(li0, a0);
				append(a0, t2);
				append(li0, button0);
				append(button0, span0);
				append(span0, t3);
				append(ul, t4);
				append(ul, li1);
				append(li1, a1);
				append(a1, t5);
				append(li1, button1);
				append(button1, span1);
				append(span1, t6);
				append(ul, t7);
				append(ul, li2);
				append(li2, a2);
				append(a2, t8);
				append(li2, button2);
				append(button2, span2);
				append(span2, t9);
				append(ul, t10);
				append(ul, li3);
				append(li3, a3);
				append(a3, t11);
				append(li3, button3);
				append(button3, span3);
				append(span3, t12);
				append(ul, t13);
				append(ul, li4);
				append(li4, a4);
				append(a4, t14);
				append(li4, button4);
				append(button4, span4);
				append(span4, t15);
				append(div2, t16);
				append(div2, div1);
				append(div1, a5);
				append(a5, span9);
				append(span9, span6);
				append(span6, span5);
				append(span5, t17);
				append(span9, t18);
				append(span9, span8);
				append(span8, span7);
				append(span7, t19);
				append(a5, t20);
				append(a5, span13);
				append(span13, span12);
				append(span12, span10);
				append(span10, svg1);
				append(svg1, g);
				append(g, rect0);
				append(g, rect1);
				append(g, rect2);
				append(svg1, defs);
				append(defs, clipPath);
				append(clipPath, path1);
				append(span12, t21);
				append(span12, span11);
				append(span11, svg2);
				append(svg2, path2);
				insert(target, t22, anchor);
				insert(target, br0, anchor);
				insert(target, t23, anchor);
				insert(target, br1, anchor);
				current = true;

				if (!mounted) {
					dispose = listen(a0, "click", /*click_handler*/ ctx[7]);
					mounted = true;
				}
			},
			p(ctx, [dirty]) {
				if (!current || dirty & /*light_on_dark*/ 1 && path0_fill_value !== (path0_fill_value = !!/*light_on_dark*/ ctx[0]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9")) {
					attr(path0, "fill", path0_fill_value);
				}

				if (!!/*logo_visible*/ ctx[2]) {
					if (if_block) {
						if_block.p(ctx, dirty);

						if (dirty & /*logo_visible*/ 4) {
							transition_in(if_block, 1);
						}
					} else {
						if_block = create_if_block$5(ctx);
						if_block.c();
						transition_in(if_block, 1);
						if_block.m(div0, null);
					}
				} else if (if_block) {
					group_outros();

					transition_out(if_block, 1, 1, () => {
						if_block = null;
					});

					check_outros();
				}

				if (!current || dirty & /*light_on_dark*/ 1 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && path2_fill_value !== (path2_fill_value = !!/*light_on_dark*/ ctx[0] ? "#fbf8e9" : "#16343e")) {
					attr(path2, "fill", path2_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && span13_class_value !== (span13_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"))) {
					attr(span13, "class", span13_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && div2_class_value !== (div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"))) {
					attr(div2, "class", div2_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && div3_class_value !== (div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"))) {
					attr(div3, "class", div3_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && div4_class_value !== (div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"))) {
					attr(div4, "class", div4_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 1 && header_class_value !== (header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[0]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"))) {
					attr(header, "class", header_class_value);
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o(local) {
				transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(header);
				if (if_block) if_block.d();
				if (detaching) detach(t22);
				if (detaching) detach(br0);
				if (detaching) detach(t23);
				if (detaching) detach(br1);
				mounted = false;
				dispose();
			}
		};
	}

	let shape_render_duration$3 = 1500;
	let text_render_duration$3 = 500;
	let display_duration$1 = 2500;

	function instance$6($$self, $$props, $$invalidate) {
		let { light_on_dark = false } = $$props;
		let sidebar_show = false;

		let { sidebarFunction = function (evt) {
			console.log("showSidebar", evt);
			sidebar_show = !sidebar_show;

			evt.target.data = {
				action: "show",
				set: sidebar_show,
				path: "target" in evt && "hash" in evt.target
				? evt.target.hash
				: ""
			};

			evt.target.dispatchEvent(new CustomEvent("sidebar", evt));
		} } = $$props;

		let logo_visible = false;
		let hide_cori = false;
		let cori_rendered = false;
		let hide_risi = true;
		let risi_rendered = false;

		let redraw = function (vis) {
			if (!!vis && !hide_cori && !cori_rendered) {
				$$invalidate(2, logo_visible = true);

				setTimeout(
					() => {
						$$invalidate(4, cori_rendered = true);
						$$invalidate(6, risi_rendered = false);

						setTimeout(
							() => {
								// console.log("hide cori");
								$$invalidate(3, hide_cori = !hide_cori);
							},
							display_duration$1
						);

						setTimeout(
							() => {
								// console.log("show risi");
								$$invalidate(5, hide_risi = !hide_risi);

								setTimeout(
									() => {
										$$invalidate(6, risi_rendered = true);
										$$invalidate(4, cori_rendered = false);

										// Restart
										if (!!logo_visible) setTimeout(
											() => {
												// console.log("show cori");
												$$invalidate(3, hide_cori = !hide_cori);

												// console.log("hide risi");
												$$invalidate(5, hide_risi = !hide_risi);

												// console.log("redraw");
												redraw(vis);
											},
											display_duration$1
										);
									},
									shape_render_duration$3 + text_render_duration$3
								);
							},
							display_duration$1 - text_render_duration$3
						);
					},
					shape_render_duration$3 + text_render_duration$3
				);

				return true;
			} else if (!logo_visible) {
				$$invalidate(4, cori_rendered = false);
				$$invalidate(6, risi_rendered = false);
				return false;
			}
		};

		onMount(function () {
			console.log("light_on_dark", light_on_dark);

			// console.log((this || window).document);
			const body = (this || window).document.body;

			// console.log(body);
			(this || window).document.getElementById("desktop-header");

			// console.log(header);
			body.style.maxHeight = "348px";

			// body.style.paddingTop = header.offsetHeight + "px";
			// header.style.top = "-" + body.style.paddingTop + "px";
			$$invalidate(2, logo_visible = true);
		});

		const click_handler = e => sidebarFunction(e);

		$$self.$$set = $$props => {
			if ("light_on_dark" in $$props) $$invalidate(0, light_on_dark = $$props.light_on_dark);
			if ("sidebarFunction" in $$props) $$invalidate(1, sidebarFunction = $$props.sidebarFunction);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*logo_visible*/ 4) {
				redraw(logo_visible);
			}
		};

		return [
			light_on_dark,
			sidebarFunction,
			logo_visible,
			hide_cori,
			cori_rendered,
			hide_risi,
			risi_rendered,
			click_handler
		];
	}

	class CORI_RISI_Header extends SvelteComponent {
		constructor(options) {
			super();
			if (!document.getElementById("svelte-sdid3b-style")) add_css$6();
			init(this, options, instance$6, create_fragment$6, safe_not_equal, { light_on_dark: 0, sidebarFunction: 1 });
		}
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\Apps.svelte generated by Svelte v3.26.0 */

	function add_css$5() {
		var style = element("style");
		style.id = "svelte-shzkbs-style";
		style.textContent = "button.sidebar-toggle.svelte-shzkbs{position:fixed;bottom:0;left:0;right:auto;word-break:keep-all}";
		append(document.head, style);
	}

	// (13:4) {#if (appsElms == null)}
	function create_if_block_1$3(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[6].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

		return {
			c() {
				if (default_slot) default_slot.c();
			},
			l(nodes) {
				if (default_slot) default_slot.l(nodes);
			},
			m(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 32) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};
	}

	// (18:0) {#if ((attributes !== null && 'show_sidebar_toggle_button' in attributes) && (!!attributes['show_sidebar_toggle_button'] && attributes['show_sidebar_toggle_button'] !== 'false'))}
	function create_if_block$4(ctx) {
		let button;
		let t;
		let mounted;
		let dispose;

		return {
			c() {
				button = element("button");
				t = text$2(/*toggle_sidebar_label*/ ctx[1]);
				this.h();
			},
			l(nodes) {
				button = claim_element(nodes, "BUTTON", { class: true });
				var button_nodes = children(button);
				t = claim_text(button_nodes, /*toggle_sidebar_label*/ ctx[1]);
				button_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(button, "class", "sidebar-toggle svelte-shzkbs");
			},
			m(target, anchor) {
				insert(target, button, anchor);
				append(button, t);

				if (!mounted) {
					dispose = listen(button, "click", /*click_handler*/ ctx[8]);
					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty & /*toggle_sidebar_label*/ 2) set_data(t, /*toggle_sidebar_label*/ ctx[1]);
			},
			d(detaching) {
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	function create_fragment$5(ctx) {
		let header;
		let t0;
		let div;
		let t1;
		let if_block1_anchor;
		let current;

		header = new CORI_RISI_Header({
				props: {
					light_on_dark: /*attributes*/ ctx[0] !== null && "light_on_dark" in /*attributes*/ ctx[0]
					? !!/*attributes*/ ctx[0]["light_on_dark"] && /*attributes*/ ctx[0]["light_on_dark"] !== "false"
					: false,
					sidebarFunction: /*showSidebar*/ ctx[3]
				}
			});

		let if_block0 = /*appsElms*/ ctx[2] == null && create_if_block_1$3(ctx);
		let if_block1 = /*attributes*/ ctx[0] !== null && "show_sidebar_toggle_button" in /*attributes*/ ctx[0] && (!!/*attributes*/ ctx[0]["show_sidebar_toggle_button"] && /*attributes*/ ctx[0]["show_sidebar_toggle_button"] !== "false") && create_if_block$4(ctx);

		return {
			c() {
				create_component(header.$$.fragment);
				t0 = space();
				div = element("div");
				if (if_block0) if_block0.c();
				t1 = space();
				if (if_block1) if_block1.c();
				if_block1_anchor = empty();
			},
			l(nodes) {
				claim_component(header.$$.fragment, nodes);
				t0 = claim_space(nodes);
				div = claim_element(nodes, "DIV", {});
				var div_nodes = children(div);
				if (if_block0) if_block0.l(div_nodes);
				div_nodes.forEach(detach);
				t1 = claim_space(nodes);
				if (if_block1) if_block1.l(nodes);
				if_block1_anchor = empty();
			},
			m(target, anchor) {
				mount_component(header, target, anchor);
				insert(target, t0, anchor);
				insert(target, div, anchor);
				if (if_block0) if_block0.m(div, null);
				/*div_binding*/ ctx[7](div);
				insert(target, t1, anchor);
				if (if_block1) if_block1.m(target, anchor);
				insert(target, if_block1_anchor, anchor);
				current = true;
			},
			p(ctx, [dirty]) {
				const header_changes = {};

				if (dirty & /*attributes*/ 1) header_changes.light_on_dark = /*attributes*/ ctx[0] !== null && "light_on_dark" in /*attributes*/ ctx[0]
				? !!/*attributes*/ ctx[0]["light_on_dark"] && /*attributes*/ ctx[0]["light_on_dark"] !== "false"
				: false;

				header.$set(header_changes);

				if (/*appsElms*/ ctx[2] == null) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty & /*appsElms*/ 4) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_1$3(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(div, null);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				if (/*attributes*/ ctx[0] !== null && "show_sidebar_toggle_button" in /*attributes*/ ctx[0] && (!!/*attributes*/ ctx[0]["show_sidebar_toggle_button"] && /*attributes*/ ctx[0]["show_sidebar_toggle_button"] !== "false")) {
					if (if_block1) {
						if_block1.p(ctx, dirty);
					} else {
						if_block1 = create_if_block$4(ctx);
						if_block1.c();
						if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
					}
				} else if (if_block1) {
					if_block1.d(1);
					if_block1 = null;
				}
			},
			i(local) {
				if (current) return;
				transition_in(header.$$.fragment, local);
				transition_in(if_block0);
				current = true;
			},
			o(local) {
				transition_out(header.$$.fragment, local);
				transition_out(if_block0);
				current = false;
			},
			d(detaching) {
				destroy_component(header, detaching);
				if (detaching) detach(t0);
				if (detaching) detach(div);
				if (if_block0) if_block0.d();
				/*div_binding*/ ctx[7](null);
				if (detaching) detach(t1);
				if (if_block1) if_block1.d(detaching);
				if (detaching) detach(if_block1_anchor);
			}
		};
	}

	function instance$5($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		let { attributes = null } = $$props;
		let { innerElms = null } = $$props;
		let appsElms = null;
		let sidebar_show = false;
		let { toggle_sidebar_label = "Toggle Sidebar" } = $$props;

		function showSidebar(evt) {
			console.log("showSidebar", evt);
			sidebar_show = !sidebar_show;

			evt.target.data = {
				action: "show",
				set: sidebar_show,
				path: "target" in evt && "hash" in evt.target
				? evt.target.hash
				: ""
			};

			evt.target.dispatchEvent(new CustomEvent("sidebar", evt));
		}

		onMount(() => {
			// console.log("attributes", attributes);
			if (innerElms != null) {
				console.log("Apps inner:", innerElms.childNodes.length, innerElms.innerHTML);
				const childNodes = [...innerElms.childNodes]; // shallow copy

				for (const elm of childNodes) {
					console.log(elm.nodeType, elm);

					if (elm.nodeType === 1) {
						innerElms.removeChild(elm);
						appsElms.append(elm);
					}
				}
			}
		});

		function div_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				appsElms = $$value;
				$$invalidate(2, appsElms);
			});
		}

		const click_handler = e => showSidebar(e);

		$$self.$$set = $$props => {
			if ("attributes" in $$props) $$invalidate(0, attributes = $$props.attributes);
			if ("innerElms" in $$props) $$invalidate(4, innerElms = $$props.innerElms);
			if ("toggle_sidebar_label" in $$props) $$invalidate(1, toggle_sidebar_label = $$props.toggle_sidebar_label);
			if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
		};

		return [
			attributes,
			toggle_sidebar_label,
			appsElms,
			showSidebar,
			innerElms,
			$$scope,
			slots,
			div_binding,
			click_handler
		];
	}

	class Apps extends SvelteComponent {
		constructor(options) {
			super();
			if (!document.getElementById("svelte-shzkbs-style")) add_css$5();

			init(this, options, instance$5, create_fragment$5, safe_not_equal, {
				attributes: 0,
				innerElms: 4,
				toggle_sidebar_label: 1
			});
		}
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\modals\Modal.svelte generated by Svelte v3.26.0 */

	const { document: document_1$4 } = globals;

	function add_css$4() {
		var style = element("style");
		style.id = "svelte-gbczwt-style";
		style.textContent = ".modal-frame.svelte-gbczwt{display:block;pointer-events:none;visibility:hidden}.modal-frame.shown.svelte-gbczwt{pointer-events:visible;visibility:visible}.modal-overlay.svelte-gbczwt{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:10;display:flex;flex-direction:column;justify-content:center}.modal-container.svelte-gbczwt{position:relative;background-color:transparent;top:1vh;left:5vw;width:90vw;height:90vh;max-height:620px;overflow:hidden}main.svelte-gbczwt{height:100%;padding:0.5rem;overflow:auto}";
		append(document_1$4.head, style);
	}

	function create_fragment$4(ctx) {
		let div2;
		let div1;
		let div0;
		let main;
		let div1_transition;
		let current;
		let mounted;
		let dispose;
		const default_slot_template = /*#slots*/ ctx[3].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

		return {
			c() {
				div2 = element("div");
				div1 = element("div");
				div0 = element("div");
				main = element("main");
				if (default_slot) default_slot.c();
				this.h();
			},
			l(nodes) {
				div2 = claim_element(nodes, "DIV", { class: true });
				var div2_nodes = children(div2);
				div1 = claim_element(div2_nodes, "DIV", { class: true, "data-close": true });
				var div1_nodes = children(div1);
				div0 = claim_element(div1_nodes, "DIV", { class: true });
				var div0_nodes = children(div0);
				main = claim_element(div0_nodes, "MAIN", { class: true });
				var main_nodes = children(main);
				if (default_slot) default_slot.l(main_nodes);
				main_nodes.forEach(detach);
				div0_nodes.forEach(detach);
				div1_nodes.forEach(detach);
				div2_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(main, "class", "svelte-gbczwt");
				attr(div0, "class", "modal-container svelte-gbczwt");
				attr(div1, "class", "modal-overlay svelte-gbczwt");
				attr(div1, "data-close", "");
				attr(div2, "class", "modal-frame svelte-gbczwt");
				toggle_class(div2, "shown", !!/*show*/ ctx[0]);
			},
			m(target, anchor) {
				insert(target, div2, anchor);
				append(div2, div1);
				append(div1, div0);
				append(div0, main);

				if (default_slot) {
					default_slot.m(main, null);
				}

				current = true;

				if (!mounted) {
					dispose = listen(div1, "click", /*closeModal*/ ctx[1]);
					mounted = true;
				}
			},
			p(ctx, [dirty]) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 4) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
					}
				}

				if (dirty & /*show*/ 1) {
					toggle_class(div2, "shown", !!/*show*/ ctx[0]);
				}
			},
			i(local) {
				if (current) return;
				transition_in(default_slot, local);

				add_render_callback(() => {
					if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fade, { duration: 150 }, true);
					div1_transition.run(1);
				});

				current = true;
			},
			o(local) {
				transition_out(default_slot, local);
				if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fade, { duration: 150 }, false);
				div1_transition.run(0);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(div2);
				if (default_slot) default_slot.d(detaching);
				if (detaching && div1_transition) div1_transition.end();
				mounted = false;
				dispose();
			}
		};
	}

	function instance$4($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		let { show = false } = $$props;

		function closeModal(e) {
			if ("close" in e.target.dataset) $$invalidate(0, show = false);
		}

		let sinceLastMovementEvent = 0;

		onMount(() => {
			document.addEventListener("keydown", function (evt) {
				const kbEvent = evt || window["event"]; // cross-browser shenanigans
				console.log(kbEvent);

				// if (kbEvent['ctrlKey'] || kbEvent['shiftKey']) {
				if (new Date().getTime() - sinceLastMovementEvent > 66) {
					if (kbEvent["keyCode"] === 27) {
						// ESC
						sinceLastMovementEvent = new Date().getTime();

						kbEvent.target.dataset["close"] = true;
						closeModal(kbEvent);
						kbEvent.preventDefault();
					}
				}

				// }
				return true;
			});
		});

		$$self.$$set = $$props => {
			if ("show" in $$props) $$invalidate(0, show = $$props.show);
			if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
		};

		return [show, closeModal, $$scope, slots];
	}

	class Modal extends SvelteComponent {
		constructor(options) {
			super();
			if (!document_1$4.getElementById("svelte-gbczwt-style")) add_css$4();
			init(this, options, instance$4, create_fragment$4, safe_not_equal, { show: 0 });
		}
	}

	// Polyfills
	/*
	 * Polyfill for adding CustomEvent
	 * see : https://developer.mozilla.org/fr/docs/Web/API/CustomEvent
	 */

	function ensure_custom_event_exists() {
	  if (!window.CustomEvent) {
	    // Create only if it doesn't exist
	    console.log("Define CustomEvent");

	    (function () {
	      function CustomEvent(event, params) {
	        params = params || {
	          bubbles: false,
	          cancelable: false,
	          detail: undefined
	        };
	        var evt = document.createEvent('CustomEvent');
	        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	        return evt;
	      }
	      CustomEvent.prototype = window.Event.prototype;
	      window.CustomEvent = CustomEvent;
	    })();
	  }
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\sidebars\Sidebar.svelte generated by Svelte v3.26.0 */

	const { document: document_1$3 } = globals;

	function add_css$3() {
		var style = element("style");
		style.id = "svelte-101869m-style";
		style.textContent = "nav.svelte-101869m{position:fixed;color:#1a1a1a;display:block;top:0;right:0;height:100%;padding:2rem 2rem 0.6rem 2rem;border-left:1px solid #aaa;background:#fff;overflow-y:auto;width:75vw;z-index:1}nav.hide-menu.svelte-101869m{display:block;transform:translateX(200%);transition:transform 0.5s}nav.shown.svelte-101869m{display:block;transform:translateX(0);transition:transform 0.5s}button.about.svelte-101869m{position:absolute;left:2rem}button.collapse-sidebar.svelte-101869m{position:absolute;right:2rem}";
		append(document_1$3.head, style);
	}

	// (54:8) {:else}
	function create_else_block$2(ctx) {
		let html_tag;
		let raw_value = /*innerElms*/ ctx[0].innerHTML + "";
		let html_anchor;

		return {
			c() {
				html_anchor = empty();
				this.h();
			},
			l(nodes) {
				html_anchor = empty();
				this.h();
			},
			h() {
				html_tag = new HtmlTag(html_anchor);
			},
			m(target, anchor) {
				html_tag.m(raw_value, target, anchor);
				insert(target, html_anchor, anchor);
			},
			p(ctx, dirty) {
				if (dirty & /*innerElms*/ 1 && raw_value !== (raw_value = /*innerElms*/ ctx[0].innerHTML + "")) html_tag.p(raw_value);
			},
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(html_anchor);
				if (detaching) html_tag.d();
			}
		};
	}

	// (52:8) {#if (innerElms == null)}
	function create_if_block$3(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[5].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

		return {
			c() {
				if (default_slot) default_slot.c();
			},
			l(nodes) {
				if (default_slot) default_slot.l(nodes);
			},
			m(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 2048) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};
	}

	// (61:0) <Modal bind:show={modal_show}>
	function create_default_slot(ctx) {
		let div;

		return {
			c() {
				div = element("div");
			},
			l(nodes) {
				div = claim_element(nodes, "DIV", {});
				children(div).forEach(detach);
			},
			m(target, anchor) {
				insert(target, div, anchor);
				/*div_binding*/ ctx[9](div);
			},
			p: noop,
			d(detaching) {
				if (detaching) detach(div);
				/*div_binding*/ ctx[9](null);
			}
		};
	}

	function create_fragment$3(ctx) {
		let nav;
		let button0;
		let t0;
		let t1;
		let button1;
		let t2;
		let t3;
		let br0;
		let br1;
		let br2;
		let t4;
		let div;
		let current_block_type_index;
		let if_block;
		let nav_transition;
		let t5;
		let modal;
		let updating_show;
		let current;
		let mounted;
		let dispose;
		const if_block_creators = [create_if_block$3, create_else_block$2];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*innerElms*/ ctx[0] == null) return 0;
			return 1;
		}

		current_block_type_index = select_block_type(ctx);
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

		function modal_show_binding(value) {
			/*modal_show_binding*/ ctx[10].call(null, value);
		}

		let modal_props = {
			$$slots: { default: [create_default_slot] },
			$$scope: { ctx }
		};

		if (/*modal_show*/ ctx[2] !== void 0) {
			modal_props.show = /*modal_show*/ ctx[2];
		}

		modal = new Modal({ props: modal_props });
		binding_callbacks.push(() => bind(modal, "show", modal_show_binding));

		return {
			c() {
				nav = element("nav");
				button0 = element("button");
				t0 = text$2("Close Sidebar");
				t1 = space();
				button1 = element("button");
				t2 = text$2("About");
				t3 = space();
				br0 = element("br");
				br1 = element("br");
				br2 = element("br");
				t4 = space();
				div = element("div");
				if_block.c();
				t5 = space();
				create_component(modal.$$.fragment);
				this.h();
			},
			l(nodes) {
				nav = claim_element(nodes, "NAV", { class: true });
				var nav_nodes = children(nav);
				button0 = claim_element(nav_nodes, "BUTTON", { class: true });
				var button0_nodes = children(button0);
				t0 = claim_text(button0_nodes, "Close Sidebar");
				button0_nodes.forEach(detach);
				t1 = claim_space(nav_nodes);
				button1 = claim_element(nav_nodes, "BUTTON", { class: true });
				var button1_nodes = children(button1);
				t2 = claim_text(button1_nodes, "About");
				button1_nodes.forEach(detach);
				t3 = claim_space(nav_nodes);
				br0 = claim_element(nav_nodes, "BR", {});
				br1 = claim_element(nav_nodes, "BR", {});
				br2 = claim_element(nav_nodes, "BR", {});
				t4 = claim_space(nav_nodes);
				div = claim_element(nav_nodes, "DIV", { class: true });
				var div_nodes = children(div);
				if_block.l(div_nodes);
				div_nodes.forEach(detach);
				nav_nodes.forEach(detach);
				t5 = claim_space(nodes);
				claim_component(modal.$$.fragment, nodes);
				this.h();
			},
			h() {
				attr(button0, "class", "collapse-sidebar svelte-101869m");
				attr(button1, "class", "about svelte-101869m");
				attr(div, "class", "sidebar-content");
				attr(nav, "class", "svelte-101869m");
				toggle_class(nav, "shown", !!/*show*/ ctx[1]);
				toggle_class(nav, "hide-menu", !/*show*/ ctx[1]);
			},
			m(target, anchor) {
				insert(target, nav, anchor);
				append(nav, button0);
				append(button0, t0);
				append(nav, t1);
				append(nav, button1);
				append(button1, t2);
				append(nav, t3);
				append(nav, br0);
				append(nav, br1);
				append(nav, br2);
				append(nav, t4);
				append(nav, div);
				if_blocks[current_block_type_index].m(div, null);
				insert(target, t5, anchor);
				mount_component(modal, target, anchor);
				current = true;

				if (!mounted) {
					dispose = [
						listen(button0, "click", /*click_handler*/ ctx[6]),
						listen(button1, "click", /*click_handler_1*/ ctx[7]),
						listen(nav, "sidebar", /*sidebar_handler*/ ctx[8])
					];

					mounted = true;
				}
			},
			p(ctx, [dirty]) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(div, null);
				}

				if (dirty & /*show*/ 2) {
					toggle_class(nav, "shown", !!/*show*/ ctx[1]);
				}

				if (dirty & /*show*/ 2) {
					toggle_class(nav, "hide-menu", !/*show*/ ctx[1]);
				}

				const modal_changes = {};

				if (dirty & /*$$scope, modalElms*/ 2056) {
					modal_changes.$$scope = { dirty, ctx };
				}

				if (!updating_show && dirty & /*modal_show*/ 4) {
					updating_show = true;
					modal_changes.show = /*modal_show*/ ctx[2];
					add_flush_callback(() => updating_show = false);
				}

				modal.$set(modal_changes);
			},
			i(local) {
				if (current) return;
				transition_in(if_block);

				add_render_callback(() => {
					if (!nav_transition) nav_transition = create_bidirectional_transition(nav, fly, { x: 250, opacity: 1 }, true);
					nav_transition.run(1);
				});

				transition_in(modal.$$.fragment, local);
				current = true;
			},
			o(local) {
				transition_out(if_block);
				if (!nav_transition) nav_transition = create_bidirectional_transition(nav, fly, { x: 250, opacity: 1 }, false);
				nav_transition.run(0);
				transition_out(modal.$$.fragment, local);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(nav);
				if_blocks[current_block_type_index].d();
				if (detaching && nav_transition) nav_transition.end();
				if (detaching) detach(t5);
				destroy_component(modal, detaching);
				mounted = false;
				run_all(dispose);
			}
		};
	}

	function instance$3($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		ensure_custom_event_exists();
		let { innerElms = null } = $$props;
		let { show = false } = $$props;
		let modal_show = false;
		let modalElms = null;
		let sinceKeyEvent = 0;
		let mounted = false;
		const processedElms = {};

		function toggleSidebar(evt) {
			if ("data" in evt.target && "set" in evt.target.data && "action" in evt.target.data && evt.target.data["action"] === "show") {
				// console.log("toggleSidebar", evt.target.data);
				$$invalidate(1, show = evt.target.data["set"]);
			} else {
				$$invalidate(1, show = !show);
			}

			if (!!show) {
				document.getElementById("sidebar").style.visibility = "visible";
			} else {
				document.getElementById("sidebar").style.visibility = "hide-menu";
			}
		}

		function showAbout(evt) {
			console.log("showAbout", evt.target.data);
			$$invalidate(2, modal_show = true);
			$$invalidate(1, show = false);
		}

		onMount(() => {

			$$invalidate(13, mounted = true);

			document.addEventListener(
				"sidebar",
				function (evt) {
					// console.log("sidebar event dispatched");
					if ("target" in evt && !!evt.target.data["path"]) {
						if (evt.target.data["path"].match(/about/) !== null) {
							showAbout(evt);
						}
					} else {
						toggleSidebar(evt);
					}
				},
				true
			);

			document.addEventListener("keydown", function (evt) {
				const kbEvent = evt || window["event"]; // cross-browser shenanigans

				// console.log(kbEvent);
				if (kbEvent["keyCode"] === 32) {
					// spacebar
					kbEvent.preventDefault();
				} else if (kbEvent["ctrlKey"] || kbEvent["shiftKey"]) {
					if (new Date().getTime() - sinceKeyEvent > 66) {
						if (kbEvent["keyCode"] === 73) {
							// I/i
							sinceKeyEvent = new Date().getTime();

							toggleSidebar(kbEvent);
							kbEvent.preventDefault();
						}
					}
				} else ; // console.log('Keyboard Event: ', kbEvent['keyCode']);

				return true;
			});
		});

		const click_handler = () => $$invalidate(1, show = !show);

		const click_handler_1 = e => {
			e.target.data = {
				action: "show",
				set: false,
				path: "about"
			};

			return e.target.dispatchEvent(new CustomEvent("sidebar", e));
		};

		const sidebar_handler = e => toggleSidebar(e);

		function div_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				modalElms = $$value;
				$$invalidate(3, modalElms);
			});
		}

		function modal_show_binding(value) {
			modal_show = value;
			$$invalidate(2, modal_show);
		}

		$$self.$$set = $$props => {
			if ("innerElms" in $$props) $$invalidate(0, innerElms = $$props.innerElms);
			if ("show" in $$props) $$invalidate(1, show = $$props.show);
			if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*mounted, processedElms, innerElms, modalElms*/ 24585) {
				(function extractModalContentFromHTML(childElms, targetElms) {
					if (!!mounted && childElms != null && !!childElms.innerHTML) {
						// console.log("Before modal content filter:", childElms.childNodes.length, childElms.innerHTML);
						const childNodes = [...childElms.childNodes]; // shallow copy

						for (const elm of childNodes) {
							if (elm.nodeType === 1 && elm.className.match(/modal-content/) !== null) {
								const elm_id = "id" in elm && !!elm.id
								? elm.id
								: elm.innerHTML.toString().substring(0, 16) + elm.toString();

								const copy_elm = elm;

								// console.log("Remove from inner: ", elm);
								childElms.removeChild(elm);

								if (elm_id in processedElms) ; else {
									// console.log("Add to modal:", copy_elm.innerHTML.toString());
									targetElms.append(copy_elm); // console.log("Already processed", elm_id);
								}

								$$invalidate(14, processedElms[elm_id] = copy_elm, processedElms);
							}
						}

						$$invalidate(0, innerElms = childElms);
					} // console.log("After modal content filter:", childElms.childNodes.length);
				})(innerElms, modalElms);
			}
		};

		return [
			innerElms,
			show,
			modal_show,
			modalElms,
			toggleSidebar,
			slots,
			click_handler,
			click_handler_1,
			sidebar_handler,
			div_binding,
			modal_show_binding,
			$$scope
		];
	}

	class Sidebar extends SvelteComponent {
		constructor(options) {
			super();
			if (!document_1$3.getElementById("svelte-101869m-style")) add_css$3();
			init(this, options, instance$3, create_fragment$3, safe_not_equal, { innerElms: 0, show: 1 });
		}
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\logos\DrawLogoTest.svelte generated by Svelte v3.26.0 */

	const { document: document_1$2 } = globals;

	function add_css$2() {
		var style = element("style");
		style.id = "svelte-k4up2x-style";
		style.textContent = "svg.svelte-k4up2x.svelte-k4up2x{padding:20px 20px;width:25vw;height:auto;max-width:356px;min-width:112px}path.svelte-k4up2x.svelte-k4up2x{fill:white;opacity:1}label.svelte-k4up2x.svelte-k4up2x{position:absolute;top:1em;left:1em}.centered.svelte-k4up2x.svelte-k4up2x{float:right;position:relative;margin:10% 0 0 0;padding:2% 0 0 0;color:#676778;width:66%;clear:none}.centered.svelte-k4up2x span.svelte-k4up2x{font-family:'TT Hoves Bold',sans-serif;font-size:320%;font-weight:600;letter-spacing:0.12em;will-change:filter}";
		append(document_1$2.head, style);
	}

	function get_each_context$2(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[8] = list[i];
		child_ctx[10] = i;
		return child_ctx;
	}

	// (42:0) {#if logo_visible}
	function create_if_block$2(ctx) {
		let div;
		let div_outro;
		let t;
		let svg;
		let defs;
		let mask;
		let path0;
		let path1;
		let current_block_type_index;
		let if_block;
		let current;
		let each_value = /*title*/ ctx[0];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
		}

		const if_block_creators = [create_if_block_1$2, create_if_block_2$2, create_if_block_3$2, create_if_block_4$2];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (!/*hide_cori*/ ctx[2] && !/*cori_rendered*/ ctx[3]) return 0;
			if (!/*hide_cori*/ ctx[2]) return 1;
			if (!/*hide_risi*/ ctx[4] && !/*risi_rendered*/ ctx[5]) return 2;
			if (!/*hide_risi*/ ctx[4]) return 3;
			return -1;
		}

		if (~(current_block_type_index = select_block_type(ctx))) {
			if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		}

		return {
			c() {
				div = element("div");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				t = space();
				svg = svg_element("svg");
				defs = svg_element("defs");
				mask = svg_element("mask");
				path0 = svg_element("path");
				path1 = svg_element("path");
				if (if_block) if_block.c();
				this.h();
			},
			l(nodes) {
				div = claim_element(nodes, "DIV", { class: true });
				var div_nodes = children(div);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].l(div_nodes);
				}

				div_nodes.forEach(detach);
				t = claim_space(nodes);

				svg = claim_element(
					nodes,
					"svg",
					{
						xmlns: true,
						fill: true,
						width: true,
						height: true,
						viewBox: true,
						style: true,
						class: true
					},
					1
				);

				var svg_nodes = children(svg);
				defs = claim_element(svg_nodes, "defs", {}, 1);
				var defs_nodes = children(defs);

				mask = claim_element(
					defs_nodes,
					"mask",
					{
						id: true,
						x: true,
						y: true,
						width: true,
						height: true,
						maskUnits: true,
						maskContentUnits: true
					},
					1
				);

				var mask_nodes = children(mask);
				path0 = claim_element(mask_nodes, "path", { fill: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(mask_nodes, "path", { d: true, fill: true, class: true }, 1);
				children(path1).forEach(detach);
				mask_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				if (if_block) if_block.l(svg_nodes);
				svg_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(div, "class", "centered svelte-k4up2x");
				attr(path0, "fill", "#fff");
				attr(path0, "d", "M0 0h308v136H0z");
				attr(path0, "class", "svelte-k4up2x");
				attr(path1, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(path1, "fill", "#000");
				attr(path1, "class", "svelte-k4up2x");
				attr(mask, "id", "border-mask");
				attr(mask, "x", "0");
				attr(mask, "y", "0");
				attr(mask, "width", "308");
				attr(mask, "height", "136");
				attr(mask, "maskUnits", "userSpaceOnUse");
				attr(mask, "maskContentUnits", "userSpaceOnUse");
				attr(svg, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg, "fill", "none");
				attr(svg, "width", "136");
				attr(svg, "height", "136");
				attr(svg, "viewBox", "0 0 136 136");
				set_style(svg, "background-color", "transparent");
				attr(svg, "class", "svelte-k4up2x");
			},
			m(target, anchor) {
				insert(target, div, anchor);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}

				insert(target, t, anchor);
				insert(target, svg, anchor);
				append(svg, defs);
				append(defs, mask);
				append(mask, path0);
				append(mask, path1);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].m(svg, null);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (dirty & /*title*/ 1) {
					each_value = /*title*/ ctx[0];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$2(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
							transition_in(each_blocks[i], 1);
						} else {
							each_blocks[i] = create_each_block$2(child_ctx);
							each_blocks[i].c();
							transition_in(each_blocks[i], 1);
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}

				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if (~current_block_type_index) {
						if_blocks[current_block_type_index].p(ctx, dirty);
					}
				} else {
					if (if_block) {
						group_outros();

						transition_out(if_blocks[previous_block_index], 1, 1, () => {
							if_blocks[previous_block_index] = null;
						});

						check_outros();
					}

					if (~current_block_type_index) {
						if_block = if_blocks[current_block_type_index];

						if (!if_block) {
							if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
							if_block.c();
						}

						transition_in(if_block, 1);
						if_block.m(svg, null);
					} else {
						if_block = null;
					}
				}
			},
			i(local) {
				if (current) return;

				for (let i = 0; i < each_value.length; i += 1) {
					transition_in(each_blocks[i]);
				}

				if (div_outro) div_outro.end(1);
				transition_in(if_block);
				current = true;
			},
			o(local) {
				div_outro = create_out_transition(div, fly, { y: 0, duration: 800 });
				transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(div);
				destroy_each(each_blocks, detaching);
				if (detaching && div_outro) div_outro.end();
				if (detaching) detach(t);
				if (detaching) detach(svg);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].d();
				}
			}
		};
	}

	// (45:8) {#each title as char, i}
	function create_each_block$2(ctx) {
		let span;
		let t_value = /*char*/ ctx[8] + "";
		let t;
		let span_intro;

		return {
			c() {
				span = element("span");
				t = text$2(t_value);
				this.h();
			},
			l(nodes) {
				span = claim_element(nodes, "SPAN", { class: true });
				var span_nodes = children(span);
				t = claim_text(span_nodes, t_value);
				span_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(span, "class", "svelte-k4up2x");
			},
			m(target, anchor) {
				insert(target, span, anchor);
				append(span, t);
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;
				if (dirty & /*title*/ 1 && t_value !== (t_value = /*char*/ ctx[8] + "")) set_data(t, t_value);
			},
			i(local) {
				if (!span_intro) {
					add_render_callback(() => {
						span_intro = create_in_transition(span, fade, {
							delay: shape_render_duration$2 + /*i*/ ctx[10] * 150,
							duration: 800
						});

						span_intro.start();
					});
				}
			},
			o: noop,
			d(detaching) {
				if (detaching) detach(span);
			}
		};
	}

	// (106:29) 
	function create_if_block_4$2(ctx) {
		let g;
		let path0;
		let path1;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, transform: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				set_style(path0, "fill", "#16343e");
				set_style(path0, "stroke", "none");
				attr(path0, "d", text);
				attr(path0, "class", "svelte-k4up2x");
				set_style(path1, "fill", "#16343e");
				set_style(path1, "stroke", "#16343e");
				set_style(path1, "stroke-width", "1.5");
				attr(path1, "d", shape);
				attr(path1, "class", "svelte-k4up2x");
				attr(g, "opacity", "0.75");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$2 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (88:47) 
	function create_if_block_3$2(ctx) {
		let g;
		let path0;
		let path0_intro;
		let path1;
		let path1_intro;
		let path2;
		let path2_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				path2 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, transform: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				path2 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path2).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				set_style(path0, "fill", "#16343e");
				set_style(path0, "stroke", "none");
				attr(path0, "d", text);
				attr(path0, "class", "svelte-k4up2x");
				set_style(path1, "fill", "none");
				set_style(path1, "stroke", "#16343e");
				set_style(path1, "stroke-width", "1.5");
				attr(path1, "d", shape);
				attr(path1, "class", "svelte-k4up2x");
				set_style(path2, "fill", "#16343e");
				set_style(path2, "stroke", "#16343e");
				set_style(path2, "stroke-width", "1.5");
				attr(path2, "d", shape);
				attr(path2, "class", "svelte-k4up2x");
				attr(g, "opacity", "0.5");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				append(g, path2);
				current = true;
			},
			p(new_ctx, dirty) {
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration$2,
							delay: shape_render_duration$2,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration$2 });
						path1_intro.start();
					});
				}

				if (!path2_intro) {
					add_render_callback(() => {
						path2_intro = create_in_transition(path2, expand, {
							duration: text_render_duration$2,
							delay: shape_render_duration$2,
							easing: quintOut
						});

						path2_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$2 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (79:29) 
	function create_if_block_2$2(ctx) {
		let g;
		let path0;
		let path1;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				set_style(path0, "fill", "#16343e");
				set_style(path0, "stroke", "none");
				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-k4up2x");
				set_style(path1, "fill", "#16343e");
				set_style(path1, "stroke", "#16343e");
				set_style(path1, "stroke-width", "1.5");
				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-k4up2x");
				attr(g, "opacity", "0.75");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$2 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (61:8) {#if !hide_cori && !cori_rendered}
	function create_if_block_1$2(ctx) {
		let g;
		let path0;
		let path0_intro;
		let path1;
		let path1_intro;
		let path2;
		let path2_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				path2 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				path2 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path2).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				set_style(path0, "fill", "#16343e");
				set_style(path0, "stroke", "none");
				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-k4up2x");
				set_style(path1, "fill", "none");
				set_style(path1, "stroke", "#16343e");
				set_style(path1, "stroke-width", "1.5");
				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-k4up2x");
				set_style(path2, "fill", "#16343e");
				set_style(path2, "stroke", "#16343e");
				set_style(path2, "stroke-width", "1.5");
				attr(path2, "d", shape$1);
				attr(path2, "class", "svelte-k4up2x");
				attr(g, "opacity", "0.5");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				append(g, path2);
				current = true;
			},
			p(new_ctx, dirty) {
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration$2,
							delay: shape_render_duration$2,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration$2 });
						path1_intro.start();
					});
				}

				if (!path2_intro) {
					add_render_callback(() => {
						path2_intro = create_in_transition(path2, expand, {
							duration: text_render_duration$2,
							delay: shape_render_duration$2,
							easing: quintOut
						});

						path2_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$2 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	function create_fragment$2(ctx) {
		let label;
		let input;
		let t0;
		let t1;
		let link;
		let current;
		let mounted;
		let dispose;
		let if_block = /*logo_visible*/ ctx[1] && create_if_block$2(ctx);

		return {
			c() {
				label = element("label");
				input = element("input");
				t0 = space();
				if (if_block) if_block.c();
				t1 = space();
				link = element("link");
				this.h();
			},
			l(nodes) {
				label = claim_element(nodes, "LABEL", { class: true });
				var label_nodes = children(label);
				input = claim_element(label_nodes, "INPUT", { type: true });
				label_nodes.forEach(detach);
				t0 = claim_space(nodes);
				if (if_block) if_block.l(nodes);
				t1 = claim_space(nodes);
				link = claim_element(nodes, "LINK", { href: true, rel: true });
				this.h();
			},
			h() {
				attr(input, "type", "checkbox");
				attr(label, "class", "svelte-k4up2x");
				attr(link, "href", "https://fonts.googleapis.com/css?family=Overpass:100,400");
				attr(link, "rel", "stylesheet");
			},
			m(target, anchor) {
				insert(target, label, anchor);
				append(label, input);
				input.checked = /*logo_visible*/ ctx[1];
				insert(target, t0, anchor);
				if (if_block) if_block.m(target, anchor);
				insert(target, t1, anchor);
				insert(target, link, anchor);
				current = true;

				if (!mounted) {
					dispose = listen(input, "change", /*input_change_handler*/ ctx[6]);
					mounted = true;
				}
			},
			p(ctx, [dirty]) {
				if (dirty & /*logo_visible*/ 2) {
					input.checked = /*logo_visible*/ ctx[1];
				}

				if (/*logo_visible*/ ctx[1]) {
					if (if_block) {
						if_block.p(ctx, dirty);

						if (dirty & /*logo_visible*/ 2) {
							transition_in(if_block, 1);
						}
					} else {
						if_block = create_if_block$2(ctx);
						if_block.c();
						transition_in(if_block, 1);
						if_block.m(t1.parentNode, t1);
					}
				} else if (if_block) {
					group_outros();

					transition_out(if_block, 1, 1, () => {
						if_block = null;
					});

					check_outros();
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o(local) {
				transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(label);
				if (detaching) detach(t0);
				if (if_block) if_block.d(detaching);
				if (detaching) detach(t1);
				if (detaching) detach(link);
				mounted = false;
				dispose();
			}
		};
	}

	let shape_render_duration$2 = 1500;
	let text_render_duration$2 = 500;
	let display_duration = 2500;

	function instance$2($$self, $$props, $$invalidate) {
		let { title = "Mapping & Data Analytics" } = $$props;
		let logo_visible = false;
		let hide_cori = false;
		let cori_rendered = false;
		let hide_risi = true;
		let risi_rendered = false;

		let redraw = function (vis) {
			if (!!vis && !hide_cori && !cori_rendered) {
				$$invalidate(1, logo_visible = true);

				setTimeout(
					() => {
						$$invalidate(3, cori_rendered = true);
						$$invalidate(5, risi_rendered = false);

						setTimeout(
							() => {
								console.log("hide cori");
								$$invalidate(2, hide_cori = !hide_cori);
							},
							display_duration
						);

						setTimeout(
							() => {
								console.log("show risi");
								$$invalidate(4, hide_risi = !hide_risi);

								setTimeout(
									() => {
										$$invalidate(5, risi_rendered = true);
										$$invalidate(3, cori_rendered = false);

										// Restart
										if (!!logo_visible) setTimeout(
											() => {
												console.log("show cori");
												$$invalidate(2, hide_cori = !hide_cori);
												console.log("hide risi");
												$$invalidate(4, hide_risi = !hide_risi);
												console.log("redraw");
												redraw(vis);
											},
											display_duration
										);
									},
									shape_render_duration$2 + text_render_duration$2
								);
							},
							display_duration - text_render_duration$2
						);
					},
					shape_render_duration$2 + text_render_duration$2
				);

				return true;
			} else if (!logo_visible) {
				$$invalidate(3, cori_rendered = false);
				$$invalidate(5, risi_rendered = false);
				return false;
			}
		};

		document.addEventListener(
			"sidebar",
			function (evt) {
				console.log("sidebar event dispatched");

				if ("target" in evt && !!evt.target.data["path"]) {
					if (evt.target.data["path"].match(/about/) !== null) {
						$$invalidate(1, logo_visible = true);
					}
				}
			},
			true
		);

		function input_change_handler() {
			logo_visible = this.checked;
			$$invalidate(1, logo_visible);
		}

		$$self.$$set = $$props => {
			if ("title" in $$props) $$invalidate(0, title = $$props.title);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*logo_visible*/ 2) {
				redraw(logo_visible);
			}
		};

		return [
			title,
			logo_visible,
			hide_cori,
			cori_rendered,
			hide_risi,
			risi_rendered,
			input_change_handler
		];
	}

	class DrawLogoTest extends SvelteComponent {
		constructor(options) {
			super();
			if (!document_1$2.getElementById("svelte-k4up2x-style")) add_css$2();
			init(this, options, instance$2, create_fragment$2, safe_not_equal, { title: 0 });
		}
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\headers\CORIHeader.svelte generated by Svelte v3.26.0 */

	const { document: document_1$1 } = globals;

	function add_css$1() {
		var style = element("style");
		style.id = "svelte-sdid3b-style";
		style.textContent = ".svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{box-sizing:border-box}button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;cursor:pointer;overflow:visible;text-transform:none}svg.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:root){overflow:hidden}.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:absolute;top:0;left:0;width:100vw}*.Light-on-Dark.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b a.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{background-color:#16343e;background-color:#26535c}.site-header__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent;transition:all .35s ease,background-color 0s}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:100%;padding-left:56px;padding-right:56px;margin-right:0px;margin-left:0px}@media(max-width: 540px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding:0 0 0 1em;max-width:100vh;width:100%}}@media(min-width: 640px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 768px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1024px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1080px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:100%}}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{list-style:none;display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.justify-content-between.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{justify-content:space-between !important}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:calc(100% + 20px);list-style:none;padding:0;margin:0 0 0 -10px}.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{height:76px;flex-wrap:nowrap;transition:.35s ease}@media(min-width: 768px){.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{will-change:height}}@media(min-width: 768px){}.col.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:relative;width:100%;padding-right:10px;padding-left:10px}.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 0 auto;width:auto;max-width:100%}.site-header__main-logo.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:50%;align-self:flex-start}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:143px;height:92px;position:absolute;top:12px;left:0;transition:all .35s ease;transform-origin:top left;pointer-events:none;touch-action:none;background-color:transparent}@media(max-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{height:54px}}@media(min-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:154px;height:74px;top:4px;left:1px}}@media(min-width: 1200px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:211px;height:92px;will-change:height,width,top,left}}.site-header__main-logo.svelte-sdid3b svg.logo-border.svelte-sdid3b.svelte-sdid3b{fill:none;z-index:0}.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{top:-1px}@media(min-width: 768px){.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:155px;height:100px;top:-3px;left:1px}}.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{transition:.25s cubic-bezier(.77,0,.175,1)}@media(max-width: 1023px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text g.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{display:none}}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .logo path.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text path.svelte-sdid3b{fill:#16343e}.header-stuck .site-header__main-logo.svelte-sdid3b svg .border.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.home .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__main-logo svg .border.svelte-sdid3b.svelte-sdid3b{fill:#16343e;fill:#26535c}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b path.svelte-sdid3b{transition:all .35s ease,fill 0s}.site-header__menu-section.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__primary-menu.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding-top:10px}.site-header__item.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__item.svelte-sdid3b .site-header__item_inner.svelte-sdid3b.svelte-sdid3b{display:flex;align-items:center;flex:1 0 auto}.site-header__menu-section.svelte-sdid3b .menu.svelte-sdid3b.svelte-sdid3b{align-items:stretch;flex-wrap:nowrap}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{margin-right:0;align-items:center}@media(min-width: 1200px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{align-items:center}}.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex;flex:0 0 0;margin-right:2.5%;order:4;align-items:center}@media(max-width: 820px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{display:none}}@media(min-width: 820px){.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}}.hamburger-control__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#16343E}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__close .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.hamburger-control__close.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}.site-header__menu-section.svelte-sdid3b .menu .menu-item.svelte-sdid3b.svelte-sdid3b{align-items:stretch;display:flex}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b>li.svelte-sdid3b{padding:0 !important;margin:0 12px}.site-header__row.svelte-sdid3b #primary-navigation>li a.svelte-sdid3b.svelte-sdid3b{padding-left:0;padding-right:0}.site-header__primary-menu.svelte-sdid3b .top-level-nav-link.svelte-sdid3b.svelte-sdid3b{padding:0 10px 0 10px}.header-stuck .site-header__menu-section.svelte-sdid3b .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:#16343e !important;display:inline;background-size:0 1px;background-position:0 calc(100% - 4px);background-repeat:no-repeat;transition:.25s cubic-bezier(.77,0,.175,1);transition-duration:.35s;background-image:linear-gradient(#16343e,#16343e) !important}*.Light-on-Dark.svelte-sdid3b .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233)}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233) !important}.has-dropdowns.svelte-sdid3b .sub-menu li.svelte-sdid3b.svelte-sdid3b{width:100%;margin:0 0 12px;padding:0;border:0 !important;display:inline-block !important;clear:both}.screen-reader-text.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:focus):not(:active),.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 1 auto;padding:0;margin:0;display:flex;align-items:center;width:auto;height:100%}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{content:initial !important;display:block !important}";
		append(document_1$1.head, style);
	}

	function get_each_context$1(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[14] = list[i];
		return child_ctx;
	}

	// (718:20) {#if (!!logo_visible)}
	function create_if_block_2$1(ctx) {
		let svg;
		let defs;
		let mask;
		let path0;
		let path1;
		let g;
		let current_block_type_index;
		let if_block1;
		let current;
		let if_block0 = !!/*cori_rendered*/ ctx[5] && create_if_block_5$1(ctx);
		const if_block_creators = [create_if_block_3$1, create_if_block_4$1];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (!/*cori_rendered*/ ctx[5]) return 0;
			return 1;
		}

		if (~(current_block_type_index = select_block_type(ctx))) {
			if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		}

		return {
			c() {
				svg = svg_element("svg");
				defs = svg_element("defs");
				mask = svg_element("mask");
				path0 = svg_element("path");
				path1 = svg_element("path");
				g = svg_element("g");
				if (if_block0) if_block0.c();
				if (if_block1) if_block1.c();
				this.h();
			},
			l(nodes) {
				svg = claim_element(
					nodes,
					"svg",
					{
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true,
						class: true
					},
					1
				);

				var svg_nodes = children(svg);
				defs = claim_element(svg_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);

				mask = claim_element(
					defs_nodes,
					"mask",
					{
						id: true,
						x: true,
						y: true,
						width: true,
						height: true,
						maskUnits: true,
						maskContentUnits: true,
						class: true
					},
					1
				);

				var mask_nodes = children(mask);
				path0 = claim_element(mask_nodes, "path", { fill: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(mask_nodes, "path", { d: true, fill: true, class: true }, 1);
				children(path1).forEach(detach);
				mask_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				g = claim_element(svg_nodes, "g", { class: true, mask: true }, 1);
				var g_nodes = children(g);
				if (if_block0) if_block0.l(g_nodes);
				g_nodes.forEach(detach);
				if (if_block1) if_block1.l(svg_nodes);
				svg_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "#fff");
				attr(path0, "d", "M0 0h308v136H0z");
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(path1, "fill", "#000");
				attr(path1, "class", "svelte-sdid3b");
				attr(mask, "id", "border-mask");
				attr(mask, "x", "0");
				attr(mask, "y", "0");
				attr(mask, "width", "308");
				attr(mask, "height", "136");
				attr(mask, "maskUnits", "userSpaceOnUse");
				attr(mask, "maskContentUnits", "userSpaceOnUse");
				attr(mask, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(g, "class", "text svelte-sdid3b");
				attr(g, "mask", "url(#border-mask)");
				attr(svg, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg, "width", "308");
				attr(svg, "height", "136");
				attr(svg, "viewBox", "0 0 308 136");
				attr(svg, "fill", "none");
				set_style(svg, "background-color", "transparent");
				attr(svg, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, svg, anchor);
				append(svg, defs);
				append(defs, mask);
				append(mask, path0);
				append(mask, path1);
				append(svg, g);
				if (if_block0) if_block0.m(g, null);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].m(svg, null);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (!!/*cori_rendered*/ ctx[5]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty & /*cori_rendered*/ 32) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_5$1(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(g, null);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if (~current_block_type_index) {
						if_blocks[current_block_type_index].p(ctx, dirty);
					}
				} else {
					if (if_block1) {
						group_outros();

						transition_out(if_blocks[previous_block_index], 1, 1, () => {
							if_blocks[previous_block_index] = null;
						});

						check_outros();
					}

					if (~current_block_type_index) {
						if_block1 = if_blocks[current_block_type_index];

						if (!if_block1) {
							if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
							if_block1.c();
						}

						transition_in(if_block1, 1);
						if_block1.m(svg, null);
					} else {
						if_block1 = null;
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(svg);
				if (if_block0) if_block0.d();

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].d();
				}
			}
		};
	}

	// (728:32) {#if (!!cori_rendered)}
	function create_if_block_5$1(ctx) {
		let g;
		let path0;
		let path1;
		let g_fill_value;
		let g_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { class: true, fill: true, opacity: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "d", "M126.863 55.99c3.466 0 5.764-2.38 6.037-5.188h-3.096c-.234 1.287-1.11 2.438-2.941 2.438-2.259 0-3.486-1.482-3.486-4.231 0-2.75 1.227-4.251 3.486-4.251 1.909 0 2.804 1.248 2.921 2.554h3.116c-.195-2.886-2.551-5.323-6.037-5.323-4.382 0-6.602 3.08-6.602 7.02 0 3.88 2.22 6.98 6.602 6.98z");
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "d", "M138.625 55.99c2.785 0 4.401-1.62 4.674-3.452h-2.902c-.175.468-.662 1.014-1.772 1.014-1.363 0-1.967-.839-1.986-2.028h6.796v-1.111c0-2.77-1.753-4.973-4.868-4.973-3.311 0-4.986 2.399-4.986 5.285 0 2.924 1.831 5.264 5.044 5.264zm-1.967-6.357c.059-.975.623-1.736 1.909-1.736 1.187 0 1.752.76 1.811 1.736h-3.72zM144.5 55.814h2.999v-5.655c0-1.228.778-1.989 1.85-1.989 1.187 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974H144.5v10.198zM159.904 55.814h2.065V53.2H160.8c-.896 0-1.304-.41-1.304-1.365V48.17h2.434v-2.554h-2.434v-2.672h-2.863v2.672h-1.792v2.554h1.656v4.387c0 1.853 1.051 3.257 3.407 3.257zM167.98 55.99c2.784 0 4.401-1.62 4.673-3.452h-2.901c-.176.468-.662 1.014-1.772 1.014-1.364 0-1.967-.839-1.987-2.028h6.797v-1.111c0-2.77-1.753-4.973-4.869-4.973-3.31 0-4.985 2.399-4.985 5.285 0 2.924 1.83 5.264 5.044 5.264zm-1.967-6.357c.058-.975.623-1.736 1.908-1.736 1.188 0 1.753.76 1.811 1.736h-3.719zM173.854 55.814h2.804v-5.031c0-1.638.916-2.593 2.337-2.593h.974v-2.75h-.701c-1.305 0-2.162.76-2.61 1.658h-.078l-.233-1.482h-2.493v10.198zM125.247 74.393c3.31 0 5.082-2.223 5.082-5.265 0-3.061-1.811-5.284-5.082-5.284-3.272 0-5.083 2.223-5.083 5.284s1.772 5.265 5.083 5.265zm0-2.633c-1.227 0-2.026-.78-2.026-2.632 0-1.833.779-2.652 2.026-2.652 1.246 0 2.025.8 2.025 2.652s-.779 2.632-2.025 2.632zM131.406 74.217h2.999v-5.655c0-1.228.779-1.988 1.85-1.988 1.188 0 1.713.701 1.713 1.871v5.772h2.999V67.51c0-2.243-1.519-3.666-3.778-3.666-1.324 0-2.22.487-2.784 1.15h-.078l-.234-.975h-2.687v10.198zM155.988 69.03c1.655-.663 2.687-2.145 2.687-4.114 0-2.32-1.752-4.348-4.654-4.348h-6.231v13.65h3.057V69.4h1.908l2.941 4.816h3.583v-.195l-3.291-4.992zm-5.141-5.732h3.018c1.188 0 1.675.819 1.675 1.638 0 .858-.448 1.735-1.675 1.735h-3.018v-3.373zM163.835 74.393c1.324 0 2.22-.488 2.784-1.15h.078l.234.974h2.687V64.02h-2.999v5.655c0 1.228-.779 1.989-1.85 1.989-1.188 0-1.713-.702-1.713-1.872v-5.772h-2.999v6.708c0 2.242 1.519 3.666 3.778 3.666zM170.944 74.217h2.805v-5.03c0-1.638.915-2.594 2.337-2.594h.973v-2.75h-.701c-1.305 0-2.161.761-2.609 1.658h-.078l-.234-1.482h-2.493v10.198zM180.916 74.393c1.265 0 2.161-.449 2.726-1.092h.078l.214.916h2.687V67.51c0-2.126-1.674-3.666-4.459-3.666-2.999 0-4.382 1.638-4.382 3.548h2.805c0-.623.545-1.13 1.48-1.13 1.11 0 1.557.546 1.557 1.248v.545h-2.181c-2.804 0-4.089 1.248-4.089 3.14 0 1.813 1.266 3.198 3.564 3.198zm.759-2.34c-.896 0-1.363-.43-1.363-1.014 0-.546.428-.975 1.383-.975h1.927v.429c0 .838-.72 1.56-1.947 1.56zM187.985 74.217h2.999V59.788h-2.999v14.43zM121.04 92.62h3.077V78.972h-3.077v13.65zM126.062 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974h-2.687V92.62zM136.988 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.713.702 1.713 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.784 1.15h-.078l-.234-.974h-2.687V92.62zM152.509 92.796c3.311 0 5.083-2.223 5.083-5.265 0-3.061-1.811-5.284-5.083-5.284-3.271 0-5.082 2.223-5.082 5.284 0 3.062 1.772 5.265 5.082 5.265zm0-2.632c-1.226 0-2.025-.78-2.025-2.633 0-1.833.779-2.652 2.025-2.652 1.247 0 2.026.8 2.026 2.652 0 1.853-.779 2.633-2.026 2.633zM160.742 92.62h3.836l3.194-10.002v-.195h-3.038l-2.006 7.37h-.078l-2.064-7.37h-3.077v.195l3.233 10.003zM171.245 92.796c1.266 0 2.161-.449 2.726-1.092h.078l.214.917h2.688v-6.708c0-2.126-1.675-3.666-4.46-3.666-2.999 0-4.381 1.638-4.381 3.549h2.804c0-.624.545-1.131 1.48-1.131 1.11 0 1.558.546 1.558 1.248v.546h-2.181c-2.805 0-4.09 1.248-4.09 3.14 0 1.813 1.266 3.197 3.564 3.197zm.759-2.34c-.896 0-1.363-.429-1.363-1.014 0-.546.429-.975 1.383-.975h1.928v.43c0 .838-.721 1.56-1.948 1.56zM182.793 92.62h2.064v-2.612h-1.168c-.896 0-1.305-.41-1.305-1.365v-3.666h2.434v-2.554h-2.434V79.75h-2.862v2.672h-1.792v2.554h1.655v4.387c0 1.853 1.052 3.257 3.408 3.257zM186.214 81.214h3.194v-3.042h-3.194v3.042zm.097 11.407h2.999V82.423h-2.999V92.62zM195.272 92.796c3.311 0 5.083-2.223 5.083-5.265 0-3.061-1.811-5.284-5.083-5.284-3.272 0-5.083 2.223-5.083 5.284 0 3.062 1.773 5.265 5.083 5.265zm0-2.632c-1.227 0-2.025-.78-2.025-2.633 0-1.833.779-2.652 2.025-2.652s2.025.8 2.025 2.652c0 1.853-.779 2.633-2.025 2.633zM201.431 92.62h2.999v-5.654c0-1.229.779-1.989 1.85-1.989 1.188 0 1.714.702 1.714 1.872v5.772h2.999v-6.708c0-2.242-1.519-3.666-3.778-3.666-1.324 0-2.22.488-2.785 1.15h-.078l-.234-.974h-2.687V92.62z");
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "class", "text-group svelte-sdid3b");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(g, "opacity", "1.0");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}
			},
			i(local) {
				if (current) return;

				add_render_callback(() => {
					if (g_outro) g_outro.end(1);
					if (!g_intro) g_intro = create_in_transition(g, fade, { duration: text_render_duration$1 });
					g_intro.start();
				});

				current = true;
			},
			o(local) {
				if (g_intro) g_intro.invalidate();
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$1 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (749:49) 
	function create_if_block_4$1(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path1;
		let path1_style_value;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, class: true }, 1);
				var g_nodes = children(g);

				path0 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path0).forEach(detach);

				path1 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "none");

				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "fill", "none");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.75");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$1 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (736:28) {#if !hide_cori && !cori_rendered}
	function create_if_block_3$1(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path0_intro;
		let path1;
		let path1_style_value;
		let path1_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(nodes, "g", { opacity: true, class: true }, 1);
				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text$1);
				attr(path0, "class", "svelte-sdid3b");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;");

				attr(path1, "d", shape$1);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.5");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration$1,
							delay: shape_render_duration$1,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration$1 });
						path1_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration$1 });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (769:20) {:else}
	function create_else_block_1$1(ctx) {
		let html_tag;
		let raw_value = /*navElms*/ ctx[6].innerHTML + "";
		let html_anchor;

		return {
			c() {
				html_anchor = empty();
				this.h();
			},
			l(nodes) {
				html_anchor = empty();
				this.h();
			},
			h() {
				html_tag = new HtmlTag(html_anchor);
			},
			m(target, anchor) {
				html_tag.m(raw_value, target, anchor);
				insert(target, html_anchor, anchor);
			},
			p: noop,
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(html_anchor);
				if (detaching) html_tag.d();
			}
		};
	}

	// (767:20) {#if (innerElms == null)}
	function create_if_block_1$1(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[9].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

		return {
			c() {
				if (default_slot) default_slot.c();
			},
			l(nodes) {
				if (default_slot) default_slot.l(nodes);
			},
			m(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 256) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};
	}

	// (784:34) {:else}
	function create_else_block$1(ctx) {
		let html_tag;
		let raw_value = /*nav_link*/ ctx[14]["elm"]().innerHTML + "";
		let html_anchor;

		return {
			c() {
				html_anchor = empty();
				this.h();
			},
			l(nodes) {
				html_anchor = empty();
				this.h();
			},
			h() {
				html_tag = new HtmlTag(html_anchor);
			},
			m(target, anchor) {
				html_tag.m(raw_value, target, anchor);
				insert(target, html_anchor, anchor);
			},
			p(ctx, dirty) {
				if (dirty & /*nav_links*/ 2 && raw_value !== (raw_value = /*nav_link*/ ctx[14]["elm"]().innerHTML + "")) html_tag.p(raw_value);
			},
			d(detaching) {
				if (detaching) detach(html_anchor);
				if (detaching) html_tag.d();
			}
		};
	}

	// (778:34) {#if nav_link['link'] == "#about/"}
	function create_if_block$1(ctx) {
		let a;
		let t0_value = /*nav_link*/ ctx[14].label + "";
		let t0;
		let a_href_value;
		let t1;
		let button;
		let span;
		let t2;
		let mounted;
		let dispose;

		return {
			c() {
				a = element("a");
				t0 = text$2(t0_value);
				t1 = space();
				button = element("button");
				span = element("span");
				t2 = text$2("Show submenu for “About”");
				this.h();
			},
			l(nodes) {
				a = claim_element(nodes, "A", { href: true, role: true, class: true });
				var a_nodes = children(a);
				t0 = claim_text(a_nodes, t0_value);
				a_nodes.forEach(detach);
				t1 = claim_space(nodes);
				button = claim_element(nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button_nodes = children(button);
				span = claim_element(button_nodes, "SPAN", { class: true });
				var span_nodes = children(span);
				t2 = claim_text(span_nodes, "Show submenu for “About”");
				span_nodes.forEach(detach);
				button_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(a, "href", a_href_value = /*nav_link*/ ctx[14].link);
				attr(a, "role", "menuitem");
				attr(a, "class", " top-level-nav-link svelte-sdid3b");
				attr(span, "class", "screen-reader-text svelte-sdid3b");
				attr(button, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button, "aria-haspopup", "true");
			},
			m(target, anchor) {
				insert(target, a, anchor);
				append(a, t0);
				insert(target, t1, anchor);
				insert(target, button, anchor);
				append(button, span);
				append(span, t2);

				if (!mounted) {
					dispose = listen(a, "click", /*click_handler*/ ctx[10]);
					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty & /*nav_links*/ 2 && t0_value !== (t0_value = /*nav_link*/ ctx[14].label + "")) set_data(t0, t0_value);

				if (dirty & /*nav_links*/ 2 && a_href_value !== (a_href_value = /*nav_link*/ ctx[14].link)) {
					attr(a, "href", a_href_value);
				}
			},
			d(detaching) {
				if (detaching) detach(a);
				if (detaching) detach(t1);
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (776:24) {#each nav_links as nav_link}
	function create_each_block$1(ctx) {
		let li;
		let t;

		function select_block_type_2(ctx, dirty) {
			if (/*nav_link*/ ctx[14]["link"] == "#about/") return create_if_block$1;
			return create_else_block$1;
		}

		let current_block_type = select_block_type_2(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				li = element("li");
				if_block.c();
				t = space();
				this.h();
			},
			l(nodes) {
				li = claim_element(nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li_nodes = children(li);
				if_block.l(li_nodes);
				t = claim_space(li_nodes);
				li_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(li, "id", "menu-item-12");
				attr(li, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item svelte-sdid3b");
				attr(li, "aria-haspopup", "true");
			},
			m(target, anchor) {
				insert(target, li, anchor);
				if_block.m(li, null);
				append(li, t);
			},
			p(ctx, dirty) {
				if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(li, t);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(li);
				if_block.d();
			}
		};
	}

	function create_fragment$1(ctx) {
		let header;
		let div4;
		let div3;
		let div2;
		let div0;
		let svg0;
		let path0;
		let path0_fill_value;
		let t0;
		let t1;
		let nav;
		let current_block_type_index;
		let if_block1;
		let t2;
		let ul;
		let t3;
		let div1;
		let a;
		let span4;
		let span1;
		let span0;
		let t4;
		let t5;
		let span3;
		let span2;
		let t6;
		let t7;
		let span8;
		let span7;
		let span5;
		let svg1;
		let g;
		let rect0;
		let rect1;
		let rect2;
		let g_fill_value;
		let defs;
		let clipPath;
		let path1;
		let t8;
		let span6;
		let svg2;
		let path2;
		let path2_fill_value;
		let span8_class_value;
		let div2_class_value;
		let div3_class_value;
		let div4_class_value;
		let header_class_value;
		let t9;
		let br0;
		let t10;
		let br1;
		let current;
		let if_block0 = !!/*logo_visible*/ ctx[4] && create_if_block_2$1(ctx);
		const if_block_creators = [create_if_block_1$1, create_else_block_1$1];
		const if_blocks = [];

		function select_block_type_1(ctx, dirty) {
			if (/*innerElms*/ ctx[0] == null) return 0;
			return 1;
		}

		current_block_type_index = select_block_type_1(ctx);
		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		let each_value = /*nav_links*/ ctx[1];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
		}

		return {
			c() {
				header = element("header");
				div4 = element("div");
				div3 = element("div");
				div2 = element("div");
				div0 = element("div");
				svg0 = svg_element("svg");
				path0 = svg_element("path");
				t0 = space();
				if (if_block0) if_block0.c();
				t1 = space();
				nav = element("nav");
				if_block1.c();
				t2 = space();
				ul = element("ul");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				t3 = space();
				div1 = element("div");
				a = element("a");
				span4 = element("span");
				span1 = element("span");
				span0 = element("span");
				t4 = text$2("Site Menu");
				t5 = space();
				span3 = element("span");
				span2 = element("span");
				t6 = text$2("Close Menu");
				t7 = space();
				span8 = element("span");
				span7 = element("span");
				span5 = element("span");
				svg1 = svg_element("svg");
				g = svg_element("g");
				rect0 = svg_element("rect");
				rect1 = svg_element("rect");
				rect2 = svg_element("rect");
				defs = svg_element("defs");
				clipPath = svg_element("clipPath");
				path1 = svg_element("path");
				t8 = space();
				span6 = element("span");
				svg2 = svg_element("svg");
				path2 = svg_element("path");
				t9 = space();
				br0 = element("br");
				t10 = space();
				br1 = element("br");
				this.h();
			},
			l(nodes) {
				header = claim_element(nodes, "HEADER", { id: true, class: true, style: true });
				var header_nodes = children(header);
				div4 = claim_element(header_nodes, "DIV", { class: true });
				var div4_nodes = children(div4);
				div3 = claim_element(div4_nodes, "DIV", { class: true });
				var div3_nodes = children(div3);
				div2 = claim_element(div3_nodes, "DIV", { class: true, style: true });
				var div2_nodes = children(div2);
				div0 = claim_element(div2_nodes, "DIV", { class: true });
				var div0_nodes = children(div0);

				svg0 = claim_element(
					div0_nodes,
					"svg",
					{
						class: true,
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true
					},
					1
				);

				var svg0_nodes = children(svg0);
				path0 = claim_element(svg0_nodes, "path", { class: true, fill: true, d: true }, 1);
				children(path0).forEach(detach);
				svg0_nodes.forEach(detach);
				t0 = claim_space(div0_nodes);
				if (if_block0) if_block0.l(div0_nodes);
				div0_nodes.forEach(detach);
				t1 = claim_space(div2_nodes);

				nav = claim_element(div2_nodes, "NAV", {
					class: true,
					"data-itemcount": true,
					"data-textlength": true,
					role: true,
					"aria-label": true
				});

				var nav_nodes = children(nav);
				if_block1.l(nav_nodes);
				t2 = claim_space(nav_nodes);
				ul = claim_element(nav_nodes, "UL", { id: true, class: true });
				var ul_nodes = children(ul);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].l(ul_nodes);
				}

				ul_nodes.forEach(detach);
				nav_nodes.forEach(detach);
				t3 = claim_space(div2_nodes);
				div1 = claim_element(div2_nodes, "DIV", { class: true });
				var div1_nodes = children(div1);

				a = claim_element(div1_nodes, "A", {
					href: true,
					class: true,
					role: true,
					labelledby: true
				});

				var a_nodes = children(a);
				span4 = claim_element(a_nodes, "SPAN", { id: true, class: true });
				var span4_nodes = children(span4);
				span1 = claim_element(span4_nodes, "SPAN", { class: true });
				var span1_nodes = children(span1);
				span0 = claim_element(span1_nodes, "SPAN", { class: true });
				var span0_nodes = children(span0);
				t4 = claim_text(span0_nodes, "Site Menu");
				span0_nodes.forEach(detach);
				span1_nodes.forEach(detach);
				t5 = claim_space(span4_nodes);
				span3 = claim_element(span4_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span3_nodes = children(span3);
				span2 = claim_element(span3_nodes, "SPAN", { class: true });
				var span2_nodes = children(span2);
				t6 = claim_text(span2_nodes, "Close Menu");
				span2_nodes.forEach(detach);
				span3_nodes.forEach(detach);
				span4_nodes.forEach(detach);
				t7 = claim_space(a_nodes);
				span8 = claim_element(a_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span8_nodes = children(span8);
				span7 = claim_element(span8_nodes, "SPAN", { class: true });
				var span7_nodes = children(span7);
				span5 = claim_element(span7_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span5_nodes = children(span5);

				svg1 = claim_element(
					span5_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg1_nodes = children(svg1);

				g = claim_element(
					svg1_nodes,
					"g",
					{
						"clip-path": true,
						fill: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);

				rect0 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect0).forEach(detach);

				rect1 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect1).forEach(detach);

				rect2 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect2).forEach(detach);
				g_nodes.forEach(detach);
				defs = claim_element(svg1_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);
				clipPath = claim_element(defs_nodes, "clipPath", { id: true, class: true }, 1);
				var clipPath_nodes = children(clipPath);

				path1 = claim_element(
					clipPath_nodes,
					"path",
					{
						fill: true,
						transform: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				clipPath_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				svg1_nodes.forEach(detach);
				span5_nodes.forEach(detach);
				t8 = claim_space(span7_nodes);
				span6 = claim_element(span7_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span6_nodes = children(span6);

				svg2 = claim_element(
					span6_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg2_nodes = children(svg2);

				path2 = claim_element(
					svg2_nodes,
					"path",
					{
						d: true,
						fill: true,
						stroke: true,
						"stroke-width": true,
						class: true
					},
					1
				);

				children(path2).forEach(detach);
				svg2_nodes.forEach(detach);
				span6_nodes.forEach(detach);
				span7_nodes.forEach(detach);
				span8_nodes.forEach(detach);
				a_nodes.forEach(detach);
				div1_nodes.forEach(detach);
				div2_nodes.forEach(detach);
				div3_nodes.forEach(detach);
				div4_nodes.forEach(detach);
				header_nodes.forEach(detach);
				t9 = claim_space(nodes);
				br0 = claim_element(nodes, "BR", { class: true });
				t10 = claim_space(nodes);
				br1 = claim_element(nodes, "BR", { class: true });
				this.h();
			},
			h() {
				attr(path0, "class", "border svelte-sdid3b");

				attr(path0, "fill", path0_fill_value = !!/*light_on_dark*/ ctx[2]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9");

				attr(path0, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(svg0, "class", "logo-border svelte-sdid3b");
				attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg0, "width", "308");
				attr(svg0, "height", "136");
				attr(svg0, "viewBox", "0 0 308 136");
				attr(svg0, "fill", "none");
				set_style(svg0, "background-color", "transparent");
				attr(div0, "class", "site-header__item site-header__main-logo col-auto svelte-sdid3b");
				attr(ul, "id", "primary-navigation");
				attr(ul, "class", "row menu justify-content-start site-header__item_inner has-dropdowns has-aria-dropdowns svelte-sdid3b");
				attr(nav, "class", "site-header__item site-header__menu-section col-auto site-header__primary-menu  over-four-items over-fourty-characters svelte-sdid3b");
				attr(nav, "data-itemcount", "5");
				attr(nav, "data-textlength", "42");
				attr(nav, "role", "navigation");
				attr(nav, "aria-label", "Primary Navigation");
				attr(span0, "class", "screen-reader-text svelte-sdid3b");
				attr(span1, "class", "hamburger-control__open-label svelte-sdid3b");
				attr(span2, "class", "screen-reader-text svelte-sdid3b");
				attr(span3, "class", "hamburger-control__close-label svelte-sdid3b");
				attr(span3, "aria-hidden", "true");
				attr(span4, "id", "mm-label");
				attr(span4, "class", "hamburger-control__label svelte-sdid3b");
				attr(rect0, "y", ".5");
				attr(rect0, "width", "20");
				attr(rect0, "height", "3");
				attr(rect0, "rx", "1.5");
				attr(rect0, "class", "svelte-sdid3b");
				attr(rect1, "y", "7.5");
				attr(rect1, "width", "20");
				attr(rect1, "height", "3");
				attr(rect1, "rx", "1.5");
				attr(rect1, "class", "svelte-sdid3b");
				attr(rect2, "y", "14.5");
				attr(rect2, "width", "20");
				attr(rect2, "height", "3");
				attr(rect2, "rx", "1.5");
				attr(rect2, "class", "svelte-sdid3b");
				attr(g, "clip-path", "url(#clip0)");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(g, "class", "svelte-sdid3b");
				attr(path1, "fill", "#fff");
				attr(path1, "transform", "translate(0 .5)");
				attr(path1, "d", "M0 0h20v17H0z");
				attr(path1, "class", "svelte-sdid3b");
				attr(clipPath, "id", "clip0");
				attr(clipPath, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(svg1, "class", "menu svelte-sdid3b");
				attr(svg1, "width", "20");
				attr(svg1, "height", "18");
				attr(svg1, "viewBox", "0 0 20 18");
				attr(svg1, "fill", "none");
				attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
				attr(span5, "class", "hamburger-control__open svelte-sdid3b");
				attr(span5, "aria-hidden", "true");
				attr(path2, "d", "M3.304 20.801L11 13.104l7.698 7.697c.296.297.671.449 1.052.449.38 0 .756-.152 1.052-.449a1.459 1.459 0 000-2.104L13.104 11 20.8 3.303a1.459 1.459 0 000-2.104 1.46 1.46 0 00-2.104 0h0L11 8.898 3.301 1.2a1.46 1.46 0 00-2.103 0h0a1.46 1.46 0 000 2.104L8.834 11 1.2 18.697s0 0 0 0a1.458 1.458 0 00-.012 2.092c.255.326.713.461 1.064.461.38 0 .756-.152 1.052-.449h0z");
				attr(path2, "fill", path2_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(path2, "stroke", "#16343e");
				attr(path2, "stroke-width", ".5");
				attr(path2, "class", "svelte-sdid3b");
				attr(svg2, "class", "menu-close svelte-sdid3b");
				attr(svg2, "width", "22");
				attr(svg2, "height", "22");
				attr(svg2, "viewBox", "0 0 22 22");
				attr(svg2, "fill", "none");
				attr(svg2, "xmlns", "http://www.w3.org/2000/svg");
				attr(span6, "class", "hamburger-control__close svelte-sdid3b");
				attr(span6, "aria-hidden", "true");
				attr(span7, "class", "hamburger-control__inner svelte-sdid3b");

				attr(span8, "class", span8_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"));

				attr(span8, "aria-hidden", "true");
				attr(a, "href", "#primary-footer-menu-section");
				attr(a, "class", "mobile-menu-toggle__control js-mobile-menu-control js-open-main-menu svelte-sdid3b");
				attr(a, "role", "button");
				attr(a, "labelledby", "mm-label");
				attr(div1, "class", "site-header__item mobile-menu-toggle col svelte-sdid3b");

				attr(div2, "class", div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"));

				set_style(div2, "width", "100%");

				attr(div3, "class", div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"));

				attr(div4, "class", div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"));

				attr(header, "id", "desktop-header");

				attr(header, "class", header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"));

				set_style(header, "position", "fixed");
				set_style(header, "max-width", "100%");
				set_style(header, "max-height", "108px");
				set_style(header, "height", "75px");
				set_style(header, "z-index", "1");
				attr(br0, "class", "svelte-sdid3b");
				attr(br1, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, header, anchor);
				append(header, div4);
				append(div4, div3);
				append(div3, div2);
				append(div2, div0);
				append(div0, svg0);
				append(svg0, path0);
				append(div0, t0);
				if (if_block0) if_block0.m(div0, null);
				append(div2, t1);
				append(div2, nav);
				if_blocks[current_block_type_index].m(nav, null);
				append(nav, t2);
				append(nav, ul);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(ul, null);
				}

				append(div2, t3);
				append(div2, div1);
				append(div1, a);
				append(a, span4);
				append(span4, span1);
				append(span1, span0);
				append(span0, t4);
				append(span4, t5);
				append(span4, span3);
				append(span3, span2);
				append(span2, t6);
				append(a, t7);
				append(a, span8);
				append(span8, span7);
				append(span7, span5);
				append(span5, svg1);
				append(svg1, g);
				append(g, rect0);
				append(g, rect1);
				append(g, rect2);
				append(svg1, defs);
				append(defs, clipPath);
				append(clipPath, path1);
				append(span7, t8);
				append(span7, span6);
				append(span6, svg2);
				append(svg2, path2);
				insert(target, t9, anchor);
				insert(target, br0, anchor);
				insert(target, t10, anchor);
				insert(target, br1, anchor);
				current = true;
			},
			p(ctx, [dirty]) {
				if (!current || dirty & /*light_on_dark*/ 4 && path0_fill_value !== (path0_fill_value = !!/*light_on_dark*/ ctx[2]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9")) {
					attr(path0, "fill", path0_fill_value);
				}

				if (!!/*logo_visible*/ ctx[4]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty & /*logo_visible*/ 16) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_2$1(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type_1(ctx);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block1 = if_blocks[current_block_type_index];

					if (!if_block1) {
						if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block1.c();
					}

					transition_in(if_block1, 1);
					if_block1.m(nav, t2);
				}

				if (dirty & /*nav_links, sidebarFunction*/ 10) {
					each_value = /*nav_links*/ ctx[1];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$1(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block$1(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(ul, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}

				if (!current || dirty & /*light_on_dark*/ 4 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path2_fill_value !== (path2_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(path2, "fill", path2_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && span8_class_value !== (span8_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"))) {
					attr(span8, "class", span8_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div2_class_value !== (div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"))) {
					attr(div2, "class", div2_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div3_class_value !== (div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"))) {
					attr(div3, "class", div3_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div4_class_value !== (div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"))) {
					attr(div4, "class", div4_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && header_class_value !== (header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"))) {
					attr(header, "class", header_class_value);
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(header);
				if (if_block0) if_block0.d();
				if_blocks[current_block_type_index].d();
				destroy_each(each_blocks, detaching);
				if (detaching) detach(t9);
				if (detaching) detach(br0);
				if (detaching) detach(t10);
				if (detaching) detach(br1);
			}
		};
	}

	let hide_cori = false;
	let shape_render_duration$1 = 1500;
	let text_render_duration$1 = 500;

	function instance$1($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		let { light_on_dark = false } = $$props;
		let { innerElms = null } = $$props;

		let { nav_links = [
			{
				label: "About",
				link: "#about/",
				elm() {
					const nav_link = document.createElement("li");

					// <li id="menu-item-12" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item" aria-haspopup="true">
					// <a href="{nav_link.link}" on:click={e => sidebarFunction(e)} role="menuitem" class=" top-level-nav-link">{nav_link.label}</a>
					// <button class="sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target" aria-haspopup="true"><span class="screen-reader-text">Show submenu for “About”</span></button>
					// <!--                                    <ul class="sub-menu menu-odd  menu-depth-1" aria-hidden="true">-->
					// <!--                                        <li id="menu-item-572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-572"><a href="submenu/" role="menuitem" class=" nav-link sub-menu__nav-link">Submenu 1</a></li>-->
					// <!--                                    </ul>-->
					// </li>
					nav_link.className = "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item";

					nav_link.innerHTML = `
                    <a href="${this.link}" onClick="${e => sidebarFunction(e)}" role="menuitem" class=" top-level-nav-link">${this.label}</a>
`;

					console.log(`Resulting nav_link (${this.label})`, nav_link);
					return nav_link;
				},
				fun() {
					
				}
			}
		] } = $$props;

		let { sidebarFunction = evt => {
			console.log("showSidebar", evt);

			evt.target.data = {
				action: "show",
				set: false,
				path: "target" in evt && "hash" in evt.target
				? evt.target.hash
				: ""
			};

			evt.target.dispatchEvent(new CustomEvent("sidebar", evt));
		} } = $$props;

		let { title = "" } = $$props;
		let logo_visible = false;
		let cori_rendered = false;
		let navElms = document.createElement("div");
		const processedElms = {};

		let redraw = function (vis) {
			if (!!vis && !hide_cori && !cori_rendered) {
				$$invalidate(4, logo_visible = true);

				setTimeout(
					() => {
						$$invalidate(5, cori_rendered = true);
					},
					shape_render_duration$1 + text_render_duration$1
				);

				return true;
			} else if (!logo_visible) {
				$$invalidate(5, cori_rendered = false);
				return false;
			}
		};

		onMount(function () {
			console.log("light_on_dark", light_on_dark);
			$$invalidate(4, logo_visible = true);

			// Set label of first nav link (#about/) to title
			$$invalidate(1, nav_links = nav_links.map((nav_link, i, a) => {
				console.log("title:", title);

				if (!!title && nav_link["link"] === "#about/") {
					nav_link["label"] = title;
				}

				$$invalidate(1, nav_links[i] = nav_link, nav_links);
				console.log("label:", nav_links[i]["label"]);
				return nav_link;
			}));
		});

		const click_handler = e => sidebarFunction(e);

		$$self.$$set = $$props => {
			if ("light_on_dark" in $$props) $$invalidate(2, light_on_dark = $$props.light_on_dark);
			if ("innerElms" in $$props) $$invalidate(0, innerElms = $$props.innerElms);
			if ("nav_links" in $$props) $$invalidate(1, nav_links = $$props.nav_links);
			if ("sidebarFunction" in $$props) $$invalidate(3, sidebarFunction = $$props.sidebarFunction);
			if ("title" in $$props) $$invalidate(7, title = $$props.title);
			if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*logo_visible*/ 16) {
				redraw(logo_visible);
			}

			if ($$self.$$.dirty & /*innerElms, processedElms*/ 4097) {
				(function extractLinkContentFromHTML(childElms, targetElms) {
					if (innerElms != null) {
						console.log("extractLinkContentFromHTML:", childElms.innerHTML);
					}

					if (innerElms != null && childElms != null && !!childElms.innerHTML) {
						const childNodes = [...childElms.childNodes]; // shallow copy

						for (const elm of childNodes) {
							// div
							if (elm.nodeType === 1 && elm.className.match(/container-fluid/) !== null) {
								const elm_id = "id" in elm && !!elm.id
								? elm.id
								: elm.innerHTML.toString().substring(0, 16) + elm.className + elm.toString();

								console.log(elm_id, elm);
								const childNodes2 = [...elm.childNodes];

								for (const elm2 of childNodes2) {
									// ul
									if (elm2.nodeType === 1 && elm2.className.match(/navbar-nav/) !== null) {
										const elm_id2 = "id" in elm2 && !!elm2.id
										? elm2.id
										: elm2.innerHTML.toString().substring(0, 16) + elm2.className + elm2.toString();

										const copy_elm = elm2;
										console.log(elm_id2, elm2);
										console.log(`Found ul elm (${elm_id2}). Remove from inner:`, elm2);
										elm.removeChild(elm2);

										if (elm_id2 in processedElms) {
											console.log("Already processed", elm_id2);
										} else if (copy_elm.children.length > 0) {
											console.log("Add ul to nav target:");
											const childNodes3 = [...elm2.childNodes];

											for (const elm3 of childNodes3) {
												// li
												if (elm3.nodeType === 1) {
													const elm_id3 = "id" in elm3 && !!elm3.id
													? elm3.id
													: elm3.innerHTML.toString().substring(0, 16) + elm3.className + elm3.toString();

													const copy_elm = elm3;

													if (!!copy_elm.children[0].innerHTML) {
														// if content of <a> tag is NOT blank
														console.log(`Found link elm (${elm_id3}). Remove from inner:`, elm3);
													} else //
													//                                             if (elm_id3 in processedElms) {
													//                                                 console.log("Already processed", elm_id3);
													//
													//                                             } else if (copy_elm.children.length > 0) {
													//                                                 const new_link = {
													//                                                     label: copy_elm.children[0].innerHTML,
													//                                                     link: (title === copy_elm.children[0].innerHTML) ?
													//                                                         "#about/" :
													//                                                         (copy_elm.children[0].href) ?
													//                                                             copy_elm.children[0].href :
													//                                                             "",
													//                                                     elm: function () {
													//                                                         const nav_link = document.createElement("li");
													//                                                         nav_link.className = ((link_idx === 0) ? "active " : ""); // +
													//                                                         // "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item"
													//                                                         nav_link.innerHTML = copy_elm.innerHTML;  //`
													// // <a href="${this.link}" onClick="${e => sidebarFunction(e)}" role="menuitem" class=" top-level-nav-link">${this.label}</a>
													// //   <button class="sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target" aria-haspopup="true"><span class="screen-reader-text">Show submenu for “About”</span></button>
													// // `
													//                                                         console.log(`Resulting nav_link (${this.label})`, nav_link);
													//                                                         return nav_link;
													//                                                     },
													//                                                     fun: function () {
													//                                                     }
													//                                                 };
													//
													//                                                 if (link_idx > (nav_links.length - 1)) {
													//
													//                                                     console.log(`Update nav_links with append (${link_idx}):`, nav_links);
													//
													//                                                     nav_links = [nav_links, new_link].flat();
													//                                                 } else {
													//
													//                                                     console.log(`Update nav_links with replace (${link_idx}):`, nav_links);
													//
													//                                                     nav_links[link_idx] = new_link;
													//                                                 }
													//
													//                                                 processedElms[elm_id3] = copy_elm;
													//                                                 link_idx++;
													//                                             }
													{
														console.log(`Found blank link elm. Remove from inner:`, elm3); //                                             elm2.removeChild(elm3);
														elm2.removeChild(elm3);
													}
												}
											}

											targetElms.append(copy_elm);
											$$invalidate(12, processedElms[elm_id2] = copy_elm, processedElms);
										}
									}
								}
							}
						}

						// nav_links.forEach((nav_link) => {
						//     console.log("Add link to nav target:", nav_link);
						//     targetElms.append(nav_link.elm());
						// });
						console.log("Resulting target container:", targetElms);
					}

					$$invalidate(0, innerElms = childElms);
				})(innerElms, navElms);
			}
		};

		return [
			innerElms,
			nav_links,
			light_on_dark,
			sidebarFunction,
			logo_visible,
			cori_rendered,
			navElms,
			title,
			$$scope,
			slots,
			click_handler
		];
	}

	class CORIHeader extends SvelteComponent {
		constructor(options) {
			super();
			if (!document_1$1.getElementById("svelte-sdid3b-style")) add_css$1();

			init(this, options, instance$1, create_fragment$1, safe_not_equal, {
				light_on_dark: 2,
				innerElms: 0,
				nav_links: 1,
				sidebarFunction: 3,
				title: 7
			});
		}
	}

	/* E:\Users\jhall\Documents\CORI\apps\src\headers\RISIHeader.svelte generated by Svelte v3.26.0 */

	const { document: document_1 } = globals;

	function add_css() {
		var style = element("style");
		style.id = "svelte-sdid3b-style";
		style.textContent = ".svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{box-sizing:border-box}button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;cursor:pointer;overflow:visible;text-transform:none}svg.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:root){overflow:hidden}.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:absolute;top:0;left:0;width:100vw}*.Light-on-Dark.site-header.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b a.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.site-header.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{background-color:#16343e;background-color:#26535c}.site-header__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent;transition:all .35s ease,background-color 0s}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:100%;padding-left:56px;padding-right:56px;margin-right:0px;margin-left:0px}@media(max-width: 540px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding:0 0 0 1em;max-width:100vh;width:100%}}@media(min-width: 640px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 768px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1024px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:1024px}}@media(min-width: 1080px){.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:100%}}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{list-style:none;display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.justify-content-between.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{justify-content:space-between !important}.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{width:calc(100% + 20px);list-style:none;padding:0;margin:0 0 0 -10px}.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{height:76px;flex-wrap:nowrap;transition:.35s ease}@media(min-width: 768px){.site-header__row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{will-change:height}}@media(min-width: 768px){}.col.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b,.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{position:relative;width:100%;padding-right:10px;padding-left:10px}.col-auto.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 0 auto;width:auto;max-width:100%}.site-header__main-logo.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{max-width:50%;align-self:flex-start}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:143px;height:92px;position:absolute;top:12px;left:0;transition:all .35s ease;transform-origin:top left;pointer-events:none;touch-action:none;background-color:transparent}@media(max-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{height:54px}}@media(min-width: 768px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:154px;height:74px;top:4px;left:1px}}@media(min-width: 1200px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:211px;height:92px;will-change:height,width,top,left}}.site-header__main-logo.svelte-sdid3b svg.logo-border.svelte-sdid3b.svelte-sdid3b{fill:none;z-index:0}.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{top:-1px}@media(min-width: 768px){.header-stuck .site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b.svelte-sdid3b{width:155px;height:100px;top:-3px;left:1px}}.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{transition:.25s cubic-bezier(.77,0,.175,1)}@media(max-width: 1023px){.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text g.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg .text-group.svelte-sdid3b.svelte-sdid3b{display:none}}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .logo path.svelte-sdid3b,.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b .text path.svelte-sdid3b{fill:#16343e}.header-stuck .site-header__main-logo.svelte-sdid3b svg .border.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.home .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.home .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .menu.svelte-sdid3b g.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .logo path.svelte-sdid3b.svelte-sdid3b,.topper-has-teal-bg .site-header__main-logo.svelte-sdid3b .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .logo path.svelte-sdid3b.svelte-sdid3b,*.Light-on-Dark.svelte-sdid3b .site-header__main-logo svg .text path.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__main-logo svg .border.svelte-sdid3b.svelte-sdid3b{fill:#16343e;fill:#26535c}.site-header__main-logo.svelte-sdid3b svg.svelte-sdid3b path.svelte-sdid3b{transition:all .35s ease,fill 0s}.site-header__menu-section.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__primary-menu.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{padding-top:10px}.site-header__item.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex}.site-header__item.svelte-sdid3b .site-header__item_inner.svelte-sdid3b.svelte-sdid3b{display:flex;align-items:center;flex:1 0 auto}.site-header__menu-section.svelte-sdid3b .menu.svelte-sdid3b.svelte-sdid3b{align-items:stretch;flex-wrap:nowrap}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{margin-right:0;align-items:center}@media(min-width: 1200px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{align-items:center}}.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:flex;flex:0 0 0;margin-right:2.5%;order:4;align-items:center}@media(max-width: 820px){.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b.svelte-sdid3b{display:none}}@media(min-width: 820px){.mobile-menu-toggle.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}}.hamburger-control__inner.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open.svelte-sdid3b.svelte-sdid3b{background-color:transparent}.hamburger-control__inner.svelte-sdid3b .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#16343E}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__open .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.Light-on-Dark.svelte-sdid3b .hamburger-control__inner .hamburger-control__close .menu g.svelte-sdid3b.svelte-sdid3b{fill:#fbf8e9 !important}*.hamburger-control__close.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{display:none}.site-header__menu-section.svelte-sdid3b .menu .menu-item.svelte-sdid3b.svelte-sdid3b{align-items:stretch;display:flex}.site-header__row.svelte-sdid3b #primary-navigation.svelte-sdid3b>li.svelte-sdid3b{padding:0 !important;margin:0 12px}.site-header__row.svelte-sdid3b #primary-navigation>li a.svelte-sdid3b.svelte-sdid3b{padding-left:0;padding-right:0}.site-header__primary-menu.svelte-sdid3b .top-level-nav-link.svelte-sdid3b.svelte-sdid3b{padding:0 10px 0 10px}.header-stuck .site-header__menu-section.svelte-sdid3b .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:#16343e !important;display:inline;background-size:0 1px;background-position:0 calc(100% - 4px);background-repeat:no-repeat;transition:.25s cubic-bezier(.77,0,.175,1);transition-duration:.35s;background-image:linear-gradient(#16343e,#16343e) !important}*.Light-on-Dark.svelte-sdid3b .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233)}*.Light-on-Dark.svelte-sdid3b .header-stuck .site-header__menu-section .menu .menu-item .top-level-nav-link.svelte-sdid3b.svelte-sdid3b:not(.btn){color:rgb(251, 248, 233) !important}.has-dropdowns.svelte-sdid3b .sub-menu li.svelte-sdid3b.svelte-sdid3b{width:100%;margin:0 0 12px;padding:0;border:0 !important;display:inline-block !important;clear:both}.screen-reader-text.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b:not(:focus):not(:active),.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.sr-dropdown-button.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b{flex:0 1 auto;padding:0;margin:0;display:flex;align-items:center;width:auto;height:100%}.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.container.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::after,.row.svelte-sdid3b.svelte-sdid3b.svelte-sdid3b::before{content:initial !important;display:block !important}";
		append(document_1.head, style);
	}

	function get_each_context(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[14] = list[i];
		return child_ctx;
	}

	// (718:20) {#if (!!logo_visible)}
	function create_if_block_2(ctx) {
		let svg;
		let defs;
		let mask;
		let path0;
		let path1;
		let g;
		let current_block_type_index;
		let if_block1;
		let current;
		let if_block0 = !!/*risi_rendered*/ ctx[5] && create_if_block_5(ctx);
		const if_block_creators = [create_if_block_3, create_if_block_4];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (!/*risi_rendered*/ ctx[5]) return 0;
			return 1;
		}

		if (~(current_block_type_index = select_block_type(ctx))) {
			if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		}

		return {
			c() {
				svg = svg_element("svg");
				defs = svg_element("defs");
				mask = svg_element("mask");
				path0 = svg_element("path");
				path1 = svg_element("path");
				g = svg_element("g");
				if (if_block0) if_block0.c();
				if (if_block1) if_block1.c();
				this.h();
			},
			l(nodes) {
				svg = claim_element(
					nodes,
					"svg",
					{
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true,
						class: true
					},
					1
				);

				var svg_nodes = children(svg);
				defs = claim_element(svg_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);

				mask = claim_element(
					defs_nodes,
					"mask",
					{
						id: true,
						x: true,
						y: true,
						width: true,
						height: true,
						maskUnits: true,
						maskContentUnits: true,
						class: true
					},
					1
				);

				var mask_nodes = children(mask);
				path0 = claim_element(mask_nodes, "path", { fill: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(mask_nodes, "path", { d: true, fill: true, class: true }, 1);
				children(path1).forEach(detach);
				mask_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				g = claim_element(svg_nodes, "g", { class: true, mask: true }, 1);
				var g_nodes = children(g);
				if (if_block0) if_block0.l(g_nodes);
				g_nodes.forEach(detach);
				if (if_block1) if_block1.l(svg_nodes);
				svg_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "#fff");
				attr(path0, "d", "M0 0h308v136H0z");
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(path1, "fill", "#000");
				attr(path1, "class", "svelte-sdid3b");
				attr(mask, "id", "border-mask");
				attr(mask, "x", "0");
				attr(mask, "y", "0");
				attr(mask, "width", "308");
				attr(mask, "height", "136");
				attr(mask, "maskUnits", "userSpaceOnUse");
				attr(mask, "maskContentUnits", "userSpaceOnUse");
				attr(mask, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(g, "class", "text svelte-sdid3b");
				attr(g, "mask", "url(#border-mask)");
				attr(svg, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg, "width", "308");
				attr(svg, "height", "136");
				attr(svg, "viewBox", "0 0 308 136");
				attr(svg, "fill", "none");
				set_style(svg, "background-color", "transparent");
				attr(svg, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, svg, anchor);
				append(svg, defs);
				append(defs, mask);
				append(mask, path0);
				append(mask, path1);
				append(svg, g);
				if (if_block0) if_block0.m(g, null);

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].m(svg, null);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (!!/*risi_rendered*/ ctx[5]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty & /*risi_rendered*/ 32) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_5(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(g, null);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if (~current_block_type_index) {
						if_blocks[current_block_type_index].p(ctx, dirty);
					}
				} else {
					if (if_block1) {
						group_outros();

						transition_out(if_blocks[previous_block_index], 1, 1, () => {
							if_blocks[previous_block_index] = null;
						});

						check_outros();
					}

					if (~current_block_type_index) {
						if_block1 = if_blocks[current_block_type_index];

						if (!if_block1) {
							if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
							if_block1.c();
						}

						transition_in(if_block1, 1);
						if_block1.m(svg, null);
					} else {
						if_block1 = null;
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(svg);
				if (if_block0) if_block0.d();

				if (~current_block_type_index) {
					if_blocks[current_block_type_index].d();
				}
			}
		};
	}

	// (728:32) {#if (!!risi_rendered)}
	function create_if_block_5(ctx) {
		let g;
		let path0;
		let path1;
		let path2;
		let path3;
		let path4;
		let path5;
		let path6;
		let path7;
		let path8;
		let path9;
		let path10;
		let path11;
		let path12;
		let path13;
		let path14;
		let path15;
		let path16;
		let path17;
		let path18;
		let path19;
		let path20;
		let path21;
		let path22;
		let path23;
		let path24;
		let path25;
		let path26;
		let path27;
		let path28;
		let g_fill_value;
		let g_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				path2 = svg_element("path");
				path3 = svg_element("path");
				path4 = svg_element("path");
				path5 = svg_element("path");
				path6 = svg_element("path");
				path7 = svg_element("path");
				path8 = svg_element("path");
				path9 = svg_element("path");
				path10 = svg_element("path");
				path11 = svg_element("path");
				path12 = svg_element("path");
				path13 = svg_element("path");
				path14 = svg_element("path");
				path15 = svg_element("path");
				path16 = svg_element("path");
				path17 = svg_element("path");
				path18 = svg_element("path");
				path19 = svg_element("path");
				path20 = svg_element("path");
				path21 = svg_element("path");
				path22 = svg_element("path");
				path23 = svg_element("path");
				path24 = svg_element("path");
				path25 = svg_element("path");
				path26 = svg_element("path");
				path27 = svg_element("path");
				path28 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						class: true,
						fill: true,
						opacity: true,
						transform: true
					},
					1
				);

				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path1).forEach(detach);
				path2 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path2).forEach(detach);
				path3 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path3).forEach(detach);
				path4 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path4).forEach(detach);
				path5 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path5).forEach(detach);
				path6 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path6).forEach(detach);
				path7 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path7).forEach(detach);
				path8 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path8).forEach(detach);
				path9 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path9).forEach(detach);
				path10 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path10).forEach(detach);
				path11 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path11).forEach(detach);
				path12 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path12).forEach(detach);
				path13 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path13).forEach(detach);
				path14 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path14).forEach(detach);
				path15 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path15).forEach(detach);
				path16 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path16).forEach(detach);
				path17 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path17).forEach(detach);
				path18 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path18).forEach(detach);
				path19 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path19).forEach(detach);
				path20 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path20).forEach(detach);
				path21 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path21).forEach(detach);
				path22 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path22).forEach(detach);
				path23 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path23).forEach(detach);
				path24 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path24).forEach(detach);
				path25 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path25).forEach(detach);
				path26 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path26).forEach(detach);
				path27 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path27).forEach(detach);
				path28 = claim_element(g_nodes, "path", { class: true, d: true }, 1);
				children(path28).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "class", "st0 svelte-sdid3b");
				attr(path0, "d", "m 163.17322,54.246193 c 2.19355,-0.865875 3.55008,-2.828524 3.55008,-5.426148 0,-3.059424 -2.30899,-5.714772 -6.14771,-5.714772 h -8.2258 v 17.981329 h 4.04074 v -6.349747 h 2.51104 l 3.86757,6.349747 h 4.73345 V 60.82684 Z m -6.78269,-7.53311 h 3.98303 c 1.55857,0 2.22241,1.067912 2.22241,2.164687 0,1.125637 -0.57725,2.280136 -2.22241,2.280136 h -3.98303 z");
				attr(path1, "class", "st0 svelte-sdid3b");
				attr(path1, "d", "m 173.53485,61.317502 c 1.76061,0 2.91511,-0.634975 3.66554,-1.529712 h 0.11545 l 0.31748,1.26995 h 3.52123 V 47.636683 h -3.95416 v 7.446522 c 0,1.616299 -1.03905,2.626486 -2.45331,2.626486 -1.55858,0 -2.25128,-0.9236 -2.25128,-2.453311 v -7.590834 h -3.95416 v 8.831921 c 0,2.943973 1.99151,4.820035 4.99321,4.820035 z");
				attr(path2, "class", "st0 svelte-sdid3b");
				attr(path2, "d", "m 182.91516,61.086602 h 3.6944 V 54.44823 c 0,-2.164687 1.21222,-3.405773 3.08828,-3.405773 h 1.29882 v -3.607811 h -0.9236 c -1.73175,0 -2.85739,1.010187 -3.43464,2.193549 h -0.11545 l -0.31749,-1.962649 h -3.29032 z");
				attr(path3, "class", "st0 svelte-sdid3b");
				attr(path3, "d", "m 196.04759,61.317502 c 1.67403,0 2.85739,-0.57725 3.60781,-1.443124 h 0.11545 l 0.28863,1.212224 h 3.55008 v -8.831921 c 0,-2.799661 -2.22241,-4.820035 -5.88794,-4.820035 -3.95417,0 -5.7725,2.164686 -5.7725,4.675723 h 3.6944 c 0,-0.80815 0.72156,-1.50085 1.96265,-1.50085 1.47198,0 2.04923,0.721562 2.04923,1.645162 v 0.721562 h -2.88625 c -3.69439,0 -5.39728,1.645162 -5.39728,4.127336 -0.0289,2.395586 1.64516,4.213923 4.67572,4.213923 z m 1.01019,-3.088286 c -1.18336,0 -1.78948,-0.57725 -1.78948,-1.327675 0,-0.721562 0.57725,-1.269949 1.81834,-1.269949 h 2.5399 v 0.57725 c 0,1.067912 -0.95246,2.020374 -2.56876,2.020374 z");
				attr(path4, "class", "st0 svelte-sdid3b");
				attr(path4, "d", "m 205.37017,61.086602 h 3.95417 V 42.066223 h -3.95417 z");
				attr(path5, "class", "st0 svelte-sdid3b");
				attr(path5, "d", "m 152.34979,85.331091 h 4.06961 V 67.349762 h -4.06961 z");
				attr(path6, "class", "st0 svelte-sdid3b");
				attr(path6, "d", "m 158.98816,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45331,-2.626486 1.55857,0 2.25127,0.9236 2.25127,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99151,-4.820035 -4.99321,-4.820035 -1.76061,0 -2.91511,0.634974 -3.66553,1.529712 h -0.11545 l -0.31749,-1.26995 h -3.55008 v 13.392194 z");
				attr(path7, "class", "st0 svelte-sdid3b");
				attr(path7, "d", "m 173.39054,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45331,-2.626486 1.55858,0 2.25128,0.9236 2.25128,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99152,-4.820035 -4.99321,-4.820035 -1.76062,0 -2.91512,0.634974 -3.66554,1.529712 h -0.11545 l -0.31749,-1.26995 h -3.55008 v 13.392194 z");
				attr(path8, "class", "st0 svelte-sdid3b");
				attr(path8, "d", "m 193.85404,85.561991 c 4.35824,0 6.6961,-2.915111 6.6961,-6.926997 0,-4.040748 -2.39559,-6.955859 -6.6961,-6.955859 -4.32937,0 -6.69609,2.915111 -6.69609,6.955859 0,4.011886 2.33786,6.926997 6.69609,6.926997 z m 0,-3.463498 c -1.6163,0 -2.68421,-1.03905 -2.68421,-3.463499 0,-2.424449 1.03905,-3.492361 2.68421,-3.492361 1.64516,0 2.68421,1.03905 2.68421,3.492361 0,2.453311 -1.03905,3.463499 -2.68421,3.463499 z");
				attr(path9, "class", "st0 svelte-sdid3b");
				attr(path9, "d", "m 204.7352,85.331091 h 5.05094 l 4.21392,-13.190156 v -0.259763 h -4.01189 l -2.65535,9.697796 h -0.11545 l -2.71307,-9.697796 h -4.06961 v 0.259763 z");
				attr(path10, "class", "st0 svelte-sdid3b");
				attr(path10, "d", "m 218.58919,85.561991 c 1.67403,0 2.85739,-0.57725 3.60781,-1.443124 h 0.11545 l 0.28863,1.212224 h 3.55009 V 76.49917 c 0,-2.799661 -2.22242,-4.820035 -5.88795,-4.820035 -3.95416,0 -5.7725,2.164686 -5.7725,4.675723 h 3.6944 c 0,-0.80815 0.72156,-1.50085 1.96265,-1.50085 1.47198,0 2.04923,0.721562 2.04923,1.645162 v 0.721562 h -2.88624 c -3.6944,0 -5.39729,1.645162 -5.39729,4.127336 -0.0289,2.395586 1.64516,4.213923 4.67572,4.213923 z m 0.98133,-3.088286 c -1.18336,0 -1.78948,-0.57725 -1.78948,-1.327675 0,-0.721562 0.57725,-1.269949 1.81834,-1.269949 h 2.5399 v 0.57725 c 0,1.067912 -0.9236,2.020374 -2.56876,2.020374 z");
				attr(path11, "class", "st0 svelte-sdid3b");
				attr(path11, "d", "m 233.82859,85.331091 h 2.71307 v -3.434636 h -1.52971 c -1.18336,0 -1.73175,-0.548387 -1.73175,-1.789474 v -4.820035 h 3.20374 v -3.376911 h -3.20374 v -3.521224 h -3.78099 v 3.521224 h -2.36672 v 3.376911 h 2.19355 v 5.772497 c 0,2.424449 1.3854,4.271648 4.50255,4.271648 z");
				attr(path12, "class", "st0 svelte-sdid3b");
				attr(path12, "d", "m 238.33113,70.293735 h 4.21393 V 66.28185 h -4.21393 z m 0.11545,15.037356 h 3.95417 V 71.910035 h -3.95417 z");
				attr(path13, "class", "st0 svelte-sdid3b");
				attr(path13, "d", "m 250.2802,85.561991 c 4.35824,0 6.6961,-2.915111 6.6961,-6.926997 0,-4.040748 -2.39559,-6.955859 -6.6961,-6.955859 -4.32937,0 -6.69609,2.915111 -6.69609,6.955859 0,4.011886 2.33786,6.926997 6.69609,6.926997 z m 0,-3.463498 c -1.61629,0 -2.68421,-1.03905 -2.68421,-3.463499 0,-2.424449 1.03905,-3.492361 2.68421,-3.492361 1.64517,0 2.68422,1.03905 2.68422,3.492361 0,2.453311 -1.03905,3.463499 -2.68422,3.463499 z");
				attr(path14, "class", "st0 svelte-sdid3b");
				attr(path14, "d", "m 258.39056,85.331091 h 3.95416 v -7.446522 c 0,-1.616299 1.03905,-2.626486 2.45332,-2.626486 1.55857,0 2.25127,0.9236 2.25127,2.453312 v 7.619696 h 3.95416 V 76.49917 c 0,-2.943974 -1.99151,-4.820035 -4.99321,-4.820035 -1.76061,0 -2.91511,0.634974 -3.66554,1.529712 h -0.0866 l -0.31749,-1.26995 h -3.55009 z");
				attr(path15, "class", "st0 svelte-sdid3b");
				attr(path15, "d", "m 158.64181,109.80648 c 5.39728,0 7.50424,-2.309 7.50424,-5.51273 0,-3.52123 -2.53989,-4.877765 -5.88794,-5.570465 L 157.8048,98.20376 c -1.67403,-0.34635 -2.02038,-0.981324 -2.02038,-1.674024 0,-0.750425 0.72156,-1.558574 2.82853,-1.558574 2.13582,0 3.03056,1.067912 3.14601,2.251274 h 4.09847 c -0.0289,-3.434636 -3.05942,-5.859085 -7.1579,-5.859085 -4.24278,0 -7.01358,2.135824 -7.01358,5.166385 0,3.434636 2.45331,4.733444 5.5416,5.397284 l 2.62648,0.57725 c 1.58744,0.34635 2.19355,0.9236 2.19355,1.90492 0,1.06792 -0.89474,1.8472 -3.37691,1.8472 -1.96265,0 -3.31919,-0.86587 -3.49236,-2.82852 h -4.09847 c 0.2309,3.86757 2.7708,6.37861 7.56197,6.37861 z");
				attr(path16, "class", "st0 svelte-sdid3b");
				attr(path16, "d", "m 173.47713,109.57558 h 2.71307 v -3.43464 h -1.52971 c -1.18336,0 -1.73175,-0.54838 -1.73175,-1.78947 v -4.820035 h 3.20374 v -3.376911 h -3.20374 V 92.6333 h -3.78099 v 3.521224 h -2.36672 v 3.376911 h 2.19355 v 5.772495 c 0,2.42445 1.3854,4.27165 4.50255,4.27165 z");
				attr(path17, "class", "st0 svelte-sdid3b");
				attr(path17, "d", "m 178.12399,109.57558 h 3.6944 v -6.63837 c 0,-2.16469 1.21222,-3.405775 3.08828,-3.405775 h 1.29881 v -3.607811 h -0.9236 c -1.73175,0 -2.85738,1.010187 -3.43463,2.193549 h -0.11545 l -0.31749,-1.962649 h -3.29032 z");
				attr(path18, "class", "st0 svelte-sdid3b");
				attr(path18, "d", "m 191.25642,109.80648 c 1.67402,0 2.85738,-0.57725 3.60781,-1.44312 h 0.11545 l 0.28862,1.21222 h 3.55009 v -8.83192 c 0,-2.799662 -2.22241,-4.820036 -5.88795,-4.820036 -3.95416,0 -5.77249,2.164686 -5.77249,4.675726 h 3.69439 c 0,-0.808153 0.72157,-1.500853 1.96265,-1.500853 1.47199,0 2.04924,0.721563 2.04924,1.645163 v 0.72156 h -2.88625 c -3.6944,0 -5.39728,1.64516 -5.39728,4.12734 -0.0289,2.39558 1.64516,4.21392 4.67572,4.21392 z m 1.01019,-3.08829 c -1.18337,0 -1.78948,-0.57725 -1.78948,-1.32767 0,-0.72156 0.57725,-1.29881 1.81834,-1.29881 h 2.5399 v 0.57725 c 0,1.09677 -0.95247,2.04923 -2.56876,2.04923 z");
				attr(path19, "class", "st0 svelte-sdid3b");
				attr(path19, "d", "m 206.49581,109.57558 h 2.71308 v -3.43464 h -1.52972 c -1.18336,0 -1.73175,-0.54838 -1.73175,-1.78947 v -4.820035 h 3.20374 v -3.376911 h -3.20374 V 92.6333 h -3.78098 v 3.521224 h -2.36673 v 3.376911 h 2.19355 v 5.772495 c 0,2.42445 1.3854,4.27165 4.50255,4.27165 z");
				attr(path20, "class", "st0 svelte-sdid3b");
				attr(path20, "d", "m 217.14607,109.80648 c 3.66554,0 5.80136,-2.13582 6.17657,-4.56027 h -3.83871 c -0.2309,0.60611 -0.86587,1.32767 -2.33786,1.32767 -1.78947,0 -2.59762,-1.09677 -2.62649,-2.68421 h 8.97624 v -1.47199 c 0,-3.63667 -2.309,-6.551781 -6.40748,-6.551781 -4.35823,0 -6.58064,3.146011 -6.58064,6.955861 0,3.89643 2.39558,6.98472 6.63837,6.98472 z m -2.59762,-8.37012 c 0.0866,-1.26995 0.80815,-2.280138 2.51103,-2.280138 1.55858,0 2.309,1.010188 2.39559,2.280138 z");
				attr(path21, "class", "st0 svelte-sdid3b");
				attr(path21, "d", "m 230.7403,115.69443 c 3.75212,0 6.58065,-2.10696 6.58065,-5.48388 V 96.125661 h -3.55009 l -0.40407,1.298812 h -0.11545 c -0.63498,-0.779287 -1.67403,-1.529712 -3.57895,-1.529712 -3.37691,0 -5.45501,2.915111 -5.45501,6.955859 0,4.01189 2.04924,6.927 5.45501,6.927 1.90492,0 2.91511,-0.75043 3.57895,-1.52971 h 0.11545 v 1.87606 c 0,1.21222 -0.86588,2.13582 -2.62649,2.13582 -1.24109,0 -2.13582,-0.66384 -2.22241,-1.55857 h -3.86757 c 0.0577,3.05942 2.48217,4.99321 6.08998,4.99321 z m 0.17318,-9.35145 c -1.99152,0 -2.65535,-1.58744 -2.65535,-3.4635 0,-1.87606 0.6927,-3.492358 2.65535,-3.492358 1.96264,0 2.65534,1.616298 2.65534,3.492358 0,1.87606 -0.66383,3.4635 -2.65534,3.4635 z");
				attr(path22, "class", "st0 svelte-sdid3b");
				attr(path22, "d", "m 238.99497,94.538224 h 4.21392 v -4.011885 h -4.21392 z m 0.14431,15.037356 h 3.95417 V 96.154524 h -3.95417 z");
				attr(path23, "class", "st0 svelte-sdid3b");
				attr(path23, "d", "m 250.91518,109.80648 c 3.66553,0 5.80136,-2.13582 6.17657,-4.56027 h -3.83871 c -0.2309,0.60611 -0.86587,1.32767 -2.33786,1.32767 -1.78948,0 -2.59762,-1.09677 -2.62649,-2.68421 h 8.97624 v -1.47199 c 0,-3.63667 -2.309,-6.551781 -6.40748,-6.551781 -4.35823,0 -6.58064,3.146011 -6.58064,6.955861 -0.0289,3.89643 2.39558,6.98472 6.63837,6.98472 z m -2.59762,-8.37012 c 0.0866,-1.26995 0.80814,-2.280138 2.51103,-2.280138 1.55858,0 2.309,1.010188 2.39559,2.280138 z");
				attr(path24, "class", "st0 svelte-sdid3b");
				attr(path24, "d", "m 263.96102,109.80648 c 3.40578,0 5.88795,-1.52971 5.88795,-4.30051 0,-2.82852 -1.93379,-3.78099 -3.98302,-4.1562 l -2.56876,-0.49066 c -0.63498,-0.11545 -1.01019,-0.40408 -1.01019,-0.923601 0,-0.519524 0.57725,-0.923599 1.55857,-0.923599 1.32768,0 1.78948,0.779287 1.76061,1.3854 h 3.89644 c 0,-2.482175 -2.10696,-4.502549 -5.59932,-4.502549 -3.60781,0 -5.51274,1.789475 -5.51274,3.983024 0,2.684215 1.96265,3.809845 4.09848,4.213925 l 1.99151,0.37521 c 0.9236,0.17317 1.35653,0.4618 1.35653,1.03905 0,0.4618 -0.49066,0.98132 -1.90492,0.98132 -1.41426,0 -1.99151,-0.75042 -1.99151,-1.50085 h -3.95416 c 0.0866,2.79967 1.78947,4.82004 5.97453,4.82004 z");
				attr(path25, "class", "st0 svelte-sdid3b");
				attr(path25, "d", "m 278.44999,109.57558 h 4.06961 V 91.594251 h -4.06961 z");
				attr(path26, "class", "st0 svelte-sdid3b");
				attr(path26, "d", "m 285.08836,109.57558 h 3.95416 v -7.44652 c 0,-1.6163 1.03905,-2.626488 2.45332,-2.626488 1.55857,0 2.25127,0.923598 2.25127,2.453308 v 7.6197 h 3.95416 v -8.83192 c 0,-2.943975 -1.99151,-4.820036 -4.99321,-4.820036 -1.76061,0 -2.91511,0.634975 -3.66554,1.529712 h -0.11545 l -0.31748,-1.298812 h -3.55009 v 13.421056 z");
				attr(path27, "class", "st0 svelte-sdid3b");
				attr(path27, "d", "m 305.60959,109.80648 c 3.89644,0 5.94567,-2.42445 6.11885,-5.51273 h -3.98302 c -0.11545,1.18336 -0.95247,2.04923 -2.22242,2.04923 -1.67402,0 -2.62648,-1.03905 -2.62648,-3.49236 0,-2.42445 0.95246,-3.463498 2.62648,-3.463498 1.29882,0 2.10697,0.865878 2.22242,2.049238 h 3.98302 c -0.17318,-3.11715 -2.22241,-5.512736 -6.20544,-5.512736 -4.30051,0 -6.63837,2.886248 -6.63837,6.926996 -0.0289,4.06961 2.42445,6.95586 6.72496,6.95586 z");
				attr(path28, "class", "st0 svelte-sdid3b");
				attr(path28, "d", "m 312.85408,109.57558 h 4.21392 v -4.01189 h -4.21392 z");
				attr(g, "class", "text-group svelte-sdid3b");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(g, "opacity", "1.0");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				append(g, path2);
				append(g, path3);
				append(g, path4);
				append(g, path5);
				append(g, path6);
				append(g, path7);
				append(g, path8);
				append(g, path9);
				append(g, path10);
				append(g, path11);
				append(g, path12);
				append(g, path13);
				append(g, path14);
				append(g, path15);
				append(g, path16);
				append(g, path17);
				append(g, path18);
				append(g, path19);
				append(g, path20);
				append(g, path21);
				append(g, path22);
				append(g, path23);
				append(g, path24);
				append(g, path25);
				append(g, path26);
				append(g, path27);
				append(g, path28);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}
			},
			i(local) {
				if (current) return;

				add_render_callback(() => {
					if (g_outro) g_outro.end(1);
					if (!g_intro) g_intro = create_in_transition(g, fade, { duration: text_render_duration });
					g_intro.start();
				});

				current = true;
			},
			o(local) {
				if (g_intro) g_intro.invalidate();
				g_outro = create_out_transition(g, fade, { duration: text_render_duration });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (776:49) 
	function create_if_block_4(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path1;
		let path1_style_value;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						opacity: true,
						transform: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);

				path0 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path0).forEach(detach);

				path1 = claim_element(
					g_nodes,
					"path",
					{
						fill: true,
						style: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "fill", "none");

				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text);
				attr(path0, "class", "svelte-sdid3b");
				attr(path1, "fill", "none");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path1, "d", shape);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.75");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;
				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (763:28) {#if !hide_risi && !risi_rendered}
	function create_if_block_3(ctx) {
		let g;
		let path0;
		let path0_style_value;
		let path0_intro;
		let path1;
		let path1_style_value;
		let path1_intro;
		let g_outro;
		let current;

		return {
			c() {
				g = svg_element("g");
				path0 = svg_element("path");
				path1 = svg_element("path");
				this.h();
			},
			l(nodes) {
				g = claim_element(
					nodes,
					"g",
					{
						opacity: true,
						transform: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);
				path0 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path0).forEach(detach);
				path1 = claim_element(g_nodes, "path", { style: true, d: true, class: true }, 1);
				children(path1).forEach(detach);
				g_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(path0, "style", path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;");

				attr(path0, "d", text);
				attr(path0, "class", "svelte-sdid3b");

				attr(path1, "style", path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;");

				attr(path1, "d", shape);
				attr(path1, "class", "svelte-sdid3b");
				attr(g, "opacity", "0.5");
				attr(g, "transform", "scale(0.75, 0.76) translate(9, 12)");
				attr(g, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, g, anchor);
				append(g, path0);
				append(g, path1);
				current = true;
			},
			p(new_ctx, dirty) {
				ctx = new_ctx;

				if (!current || dirty & /*light_on_dark*/ 4 && path0_style_value !== (path0_style_value = (!!/*light_on_dark*/ ctx[2]
				? "fill: #fbf8e9; "
				: "fill: #16343e; ") + "stroke: none;")) {
					attr(path0, "style", path0_style_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path1_style_value !== (path1_style_value = (!!/*light_on_dark*/ ctx[2]
				? "stroke: #fbf8e9; "
				: "stroke: #16343e; ") + "fill: none; " + "stroke-width: 1.5;")) {
					attr(path1, "style", path1_style_value);
				}
			},
			i(local) {
				if (current) return;

				if (!path0_intro) {
					add_render_callback(() => {
						path0_intro = create_in_transition(path0, expand, {
							duration: text_render_duration,
							delay: shape_render_duration,
							easing: quintOut
						});

						path0_intro.start();
					});
				}

				if (!path1_intro) {
					add_render_callback(() => {
						path1_intro = create_in_transition(path1, draw, { duration: shape_render_duration });
						path1_intro.start();
					});
				}

				if (g_outro) g_outro.end(1);
				current = true;
			},
			o(local) {
				g_outro = create_out_transition(g, fade, { duration: text_render_duration });
				current = false;
			},
			d(detaching) {
				if (detaching) detach(g);
				if (detaching && g_outro) g_outro.end();
			}
		};
	}

	// (796:20) {:else}
	function create_else_block_1(ctx) {
		let html_tag;
		let raw_value = /*navElms*/ ctx[6].innerHTML + "";
		let html_anchor;

		return {
			c() {
				html_anchor = empty();
				this.h();
			},
			l(nodes) {
				html_anchor = empty();
				this.h();
			},
			h() {
				html_tag = new HtmlTag(html_anchor);
			},
			m(target, anchor) {
				html_tag.m(raw_value, target, anchor);
				insert(target, html_anchor, anchor);
			},
			p: noop,
			i: noop,
			o: noop,
			d(detaching) {
				if (detaching) detach(html_anchor);
				if (detaching) html_tag.d();
			}
		};
	}

	// (794:20) {#if (innerElms == null)}
	function create_if_block_1(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[9].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

		return {
			c() {
				if (default_slot) default_slot.c();
			},
			l(nodes) {
				if (default_slot) default_slot.l(nodes);
			},
			m(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope*/ 256) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
					}
				}
			},
			i(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};
	}

	// (811:24) {:else}
	function create_else_block(ctx) {
		let html_tag;
		let raw_value = /*nav_link*/ ctx[14]["elm"]().innerHTML + "";
		let html_anchor;

		return {
			c() {
				html_anchor = empty();
				this.h();
			},
			l(nodes) {
				html_anchor = empty();
				this.h();
			},
			h() {
				html_tag = new HtmlTag(html_anchor);
			},
			m(target, anchor) {
				html_tag.m(raw_value, target, anchor);
				insert(target, html_anchor, anchor);
			},
			p(ctx, dirty) {
				if (dirty & /*nav_links*/ 2 && raw_value !== (raw_value = /*nav_link*/ ctx[14]["elm"]().innerHTML + "")) html_tag.p(raw_value);
			},
			d(detaching) {
				if (detaching) detach(html_anchor);
				if (detaching) html_tag.d();
			}
		};
	}

	// (805:24) {#if nav_link['link'] == "#about/"}
	function create_if_block(ctx) {
		let a;
		let t0_value = /*nav_link*/ ctx[14].label + "";
		let t0;
		let a_href_value;
		let t1;
		let button;
		let span;
		let t2;
		let mounted;
		let dispose;

		return {
			c() {
				a = element("a");
				t0 = text$2(t0_value);
				t1 = space();
				button = element("button");
				span = element("span");
				t2 = text$2("Show submenu for “About”");
				this.h();
			},
			l(nodes) {
				a = claim_element(nodes, "A", { href: true, role: true, class: true });
				var a_nodes = children(a);
				t0 = claim_text(a_nodes, t0_value);
				a_nodes.forEach(detach);
				t1 = claim_space(nodes);
				button = claim_element(nodes, "BUTTON", { class: true, "aria-haspopup": true });
				var button_nodes = children(button);
				span = claim_element(button_nodes, "SPAN", { class: true });
				var span_nodes = children(span);
				t2 = claim_text(span_nodes, "Show submenu for “About”");
				span_nodes.forEach(detach);
				button_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(a, "href", a_href_value = /*nav_link*/ ctx[14].link);
				attr(a, "role", "menuitem");
				attr(a, "class", " top-level-nav-link svelte-sdid3b");
				attr(span, "class", "screen-reader-text svelte-sdid3b");
				attr(button, "class", "sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target svelte-sdid3b");
				attr(button, "aria-haspopup", "true");
			},
			m(target, anchor) {
				insert(target, a, anchor);
				append(a, t0);
				insert(target, t1, anchor);
				insert(target, button, anchor);
				append(button, span);
				append(span, t2);

				if (!mounted) {
					dispose = listen(a, "click", /*click_handler*/ ctx[10]);
					mounted = true;
				}
			},
			p(ctx, dirty) {
				if (dirty & /*nav_links*/ 2 && t0_value !== (t0_value = /*nav_link*/ ctx[14].label + "")) set_data(t0, t0_value);

				if (dirty & /*nav_links*/ 2 && a_href_value !== (a_href_value = /*nav_link*/ ctx[14].link)) {
					attr(a, "href", a_href_value);
				}
			},
			d(detaching) {
				if (detaching) detach(a);
				if (detaching) detach(t1);
				if (detaching) detach(button);
				mounted = false;
				dispose();
			}
		};
	}

	// (803:20) {#each nav_links as nav_link}
	function create_each_block(ctx) {
		let li;
		let t;

		function select_block_type_2(ctx, dirty) {
			if (/*nav_link*/ ctx[14]["link"] == "#about/") return create_if_block;
			return create_else_block;
		}

		let current_block_type = select_block_type_2(ctx);
		let if_block = current_block_type(ctx);

		return {
			c() {
				li = element("li");
				if_block.c();
				t = space();
				this.h();
			},
			l(nodes) {
				li = claim_element(nodes, "LI", {
					id: true,
					class: true,
					"aria-haspopup": true
				});

				var li_nodes = children(li);
				if_block.l(li_nodes);
				t = claim_space(li_nodes);
				li_nodes.forEach(detach);
				this.h();
			},
			h() {
				attr(li, "id", "menu-item-12");
				attr(li, "class", "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item svelte-sdid3b");
				attr(li, "aria-haspopup", "true");
			},
			m(target, anchor) {
				insert(target, li, anchor);
				if_block.m(li, null);
				append(li, t);
			},
			p(ctx, dirty) {
				if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(li, t);
					}
				}
			},
			d(detaching) {
				if (detaching) detach(li);
				if_block.d();
			}
		};
	}

	function create_fragment(ctx) {
		let header;
		let div4;
		let div3;
		let div2;
		let div0;
		let svg0;
		let path0;
		let path0_fill_value;
		let t0;
		let t1;
		let nav;
		let current_block_type_index;
		let if_block1;
		let t2;
		let ul;
		let t3;
		let div1;
		let a;
		let span4;
		let span1;
		let span0;
		let t4;
		let t5;
		let span3;
		let span2;
		let t6;
		let t7;
		let span8;
		let span7;
		let span5;
		let svg1;
		let g;
		let rect0;
		let rect1;
		let rect2;
		let g_fill_value;
		let defs;
		let clipPath;
		let path1;
		let t8;
		let span6;
		let svg2;
		let path2;
		let path2_fill_value;
		let span8_class_value;
		let div2_class_value;
		let div3_class_value;
		let div4_class_value;
		let header_class_value;
		let t9;
		let br0;
		let t10;
		let br1;
		let current;
		let if_block0 = !!/*logo_visible*/ ctx[4] && create_if_block_2(ctx);
		const if_block_creators = [create_if_block_1, create_else_block_1];
		const if_blocks = [];

		function select_block_type_1(ctx, dirty) {
			if (/*innerElms*/ ctx[0] == null) return 0;
			return 1;
		}

		current_block_type_index = select_block_type_1(ctx);
		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		let each_value = /*nav_links*/ ctx[1];
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				header = element("header");
				div4 = element("div");
				div3 = element("div");
				div2 = element("div");
				div0 = element("div");
				svg0 = svg_element("svg");
				path0 = svg_element("path");
				t0 = space();
				if (if_block0) if_block0.c();
				t1 = space();
				nav = element("nav");
				if_block1.c();
				t2 = space();
				ul = element("ul");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				t3 = space();
				div1 = element("div");
				a = element("a");
				span4 = element("span");
				span1 = element("span");
				span0 = element("span");
				t4 = text$2("Site Menu");
				t5 = space();
				span3 = element("span");
				span2 = element("span");
				t6 = text$2("Close Menu");
				t7 = space();
				span8 = element("span");
				span7 = element("span");
				span5 = element("span");
				svg1 = svg_element("svg");
				g = svg_element("g");
				rect0 = svg_element("rect");
				rect1 = svg_element("rect");
				rect2 = svg_element("rect");
				defs = svg_element("defs");
				clipPath = svg_element("clipPath");
				path1 = svg_element("path");
				t8 = space();
				span6 = element("span");
				svg2 = svg_element("svg");
				path2 = svg_element("path");
				t9 = space();
				br0 = element("br");
				t10 = space();
				br1 = element("br");
				this.h();
			},
			l(nodes) {
				header = claim_element(nodes, "HEADER", { id: true, class: true, style: true });
				var header_nodes = children(header);
				div4 = claim_element(header_nodes, "DIV", { class: true });
				var div4_nodes = children(div4);
				div3 = claim_element(div4_nodes, "DIV", { class: true });
				var div3_nodes = children(div3);
				div2 = claim_element(div3_nodes, "DIV", { class: true, style: true });
				var div2_nodes = children(div2);
				div0 = claim_element(div2_nodes, "DIV", { class: true });
				var div0_nodes = children(div0);

				svg0 = claim_element(
					div0_nodes,
					"svg",
					{
						class: true,
						xmlns: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						style: true
					},
					1
				);

				var svg0_nodes = children(svg0);
				path0 = claim_element(svg0_nodes, "path", { class: true, fill: true, d: true }, 1);
				children(path0).forEach(detach);
				svg0_nodes.forEach(detach);
				t0 = claim_space(div0_nodes);
				if (if_block0) if_block0.l(div0_nodes);
				div0_nodes.forEach(detach);
				t1 = claim_space(div2_nodes);

				nav = claim_element(div2_nodes, "NAV", {
					class: true,
					"data-itemcount": true,
					"data-textlength": true,
					role: true,
					"aria-label": true
				});

				var nav_nodes = children(nav);
				if_block1.l(nav_nodes);
				t2 = claim_space(nav_nodes);
				ul = claim_element(nav_nodes, "UL", { id: true, class: true });
				var ul_nodes = children(ul);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].l(ul_nodes);
				}

				ul_nodes.forEach(detach);
				nav_nodes.forEach(detach);
				t3 = claim_space(div2_nodes);
				div1 = claim_element(div2_nodes, "DIV", { class: true });
				var div1_nodes = children(div1);

				a = claim_element(div1_nodes, "A", {
					href: true,
					class: true,
					role: true,
					labelledby: true
				});

				var a_nodes = children(a);
				span4 = claim_element(a_nodes, "SPAN", { id: true, class: true });
				var span4_nodes = children(span4);
				span1 = claim_element(span4_nodes, "SPAN", { class: true });
				var span1_nodes = children(span1);
				span0 = claim_element(span1_nodes, "SPAN", { class: true });
				var span0_nodes = children(span0);
				t4 = claim_text(span0_nodes, "Site Menu");
				span0_nodes.forEach(detach);
				span1_nodes.forEach(detach);
				t5 = claim_space(span4_nodes);
				span3 = claim_element(span4_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span3_nodes = children(span3);
				span2 = claim_element(span3_nodes, "SPAN", { class: true });
				var span2_nodes = children(span2);
				t6 = claim_text(span2_nodes, "Close Menu");
				span2_nodes.forEach(detach);
				span3_nodes.forEach(detach);
				span4_nodes.forEach(detach);
				t7 = claim_space(a_nodes);
				span8 = claim_element(a_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span8_nodes = children(span8);
				span7 = claim_element(span8_nodes, "SPAN", { class: true });
				var span7_nodes = children(span7);
				span5 = claim_element(span7_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span5_nodes = children(span5);

				svg1 = claim_element(
					span5_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg1_nodes = children(svg1);

				g = claim_element(
					svg1_nodes,
					"g",
					{
						"clip-path": true,
						fill: true,
						class: true
					},
					1
				);

				var g_nodes = children(g);

				rect0 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect0).forEach(detach);

				rect1 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect1).forEach(detach);

				rect2 = claim_element(
					g_nodes,
					"rect",
					{
						y: true,
						width: true,
						height: true,
						rx: true,
						class: true
					},
					1
				);

				children(rect2).forEach(detach);
				g_nodes.forEach(detach);
				defs = claim_element(svg1_nodes, "defs", { class: true }, 1);
				var defs_nodes = children(defs);
				clipPath = claim_element(defs_nodes, "clipPath", { id: true, class: true }, 1);
				var clipPath_nodes = children(clipPath);

				path1 = claim_element(
					clipPath_nodes,
					"path",
					{
						fill: true,
						transform: true,
						d: true,
						class: true
					},
					1
				);

				children(path1).forEach(detach);
				clipPath_nodes.forEach(detach);
				defs_nodes.forEach(detach);
				svg1_nodes.forEach(detach);
				span5_nodes.forEach(detach);
				t8 = claim_space(span7_nodes);
				span6 = claim_element(span7_nodes, "SPAN", { class: true, "aria-hidden": true });
				var span6_nodes = children(span6);

				svg2 = claim_element(
					span6_nodes,
					"svg",
					{
						class: true,
						width: true,
						height: true,
						viewBox: true,
						fill: true,
						xmlns: true
					},
					1
				);

				var svg2_nodes = children(svg2);

				path2 = claim_element(
					svg2_nodes,
					"path",
					{
						d: true,
						fill: true,
						stroke: true,
						"stroke-width": true,
						class: true
					},
					1
				);

				children(path2).forEach(detach);
				svg2_nodes.forEach(detach);
				span6_nodes.forEach(detach);
				span7_nodes.forEach(detach);
				span8_nodes.forEach(detach);
				a_nodes.forEach(detach);
				div1_nodes.forEach(detach);
				div2_nodes.forEach(detach);
				div3_nodes.forEach(detach);
				div4_nodes.forEach(detach);
				header_nodes.forEach(detach);
				t9 = claim_space(nodes);
				br0 = claim_element(nodes, "BR", { class: true });
				t10 = claim_space(nodes);
				br1 = claim_element(nodes, "BR", { class: true });
				this.h();
			},
			h() {
				attr(path0, "class", "border svelte-sdid3b");

				attr(path0, "fill", path0_fill_value = !!/*light_on_dark*/ ctx[2]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9");

				attr(path0, "d", "M115.084 31.849L61.916.809a5.66 5.66 0 00-5.832 0L2.916 31.85C1.118 32.927 0 34.839 0 36.949v62.127c0 2.109 1.118 4.021 2.916 5.1l53.168 31.039c.923.54 1.895.785 2.916.785 1.02 0 2.041-.245 2.916-.785l53.168-31.039c1.798-1.03 2.916-2.991 2.916-5.1V36.948c0-2.108-1.118-4.02-2.916-5.1z");
				attr(svg0, "class", "logo-border svelte-sdid3b");
				attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
				attr(svg0, "width", "308");
				attr(svg0, "height", "136");
				attr(svg0, "viewBox", "0 0 308 136");
				attr(svg0, "fill", "none");
				set_style(svg0, "background-color", "transparent");
				attr(div0, "class", "site-header__item site-header__main-logo col-auto svelte-sdid3b");
				attr(ul, "id", "primary-navigation");
				attr(ul, "class", "row menu justify-content-start site-header__item_inner has-dropdowns has-aria-dropdowns svelte-sdid3b");
				attr(nav, "class", "site-header__item site-header__menu-section col-auto site-header__primary-menu  over-four-items over-fourty-characters svelte-sdid3b");
				attr(nav, "data-itemcount", "5");
				attr(nav, "data-textlength", "42");
				attr(nav, "role", "navigation");
				attr(nav, "aria-label", "Primary Navigation");
				attr(span0, "class", "screen-reader-text svelte-sdid3b");
				attr(span1, "class", "hamburger-control__open-label svelte-sdid3b");
				attr(span2, "class", "screen-reader-text svelte-sdid3b");
				attr(span3, "class", "hamburger-control__close-label svelte-sdid3b");
				attr(span3, "aria-hidden", "true");
				attr(span4, "id", "mm-label");
				attr(span4, "class", "hamburger-control__label svelte-sdid3b");
				attr(rect0, "y", ".5");
				attr(rect0, "width", "20");
				attr(rect0, "height", "3");
				attr(rect0, "rx", "1.5");
				attr(rect0, "class", "svelte-sdid3b");
				attr(rect1, "y", "7.5");
				attr(rect1, "width", "20");
				attr(rect1, "height", "3");
				attr(rect1, "rx", "1.5");
				attr(rect1, "class", "svelte-sdid3b");
				attr(rect2, "y", "14.5");
				attr(rect2, "width", "20");
				attr(rect2, "height", "3");
				attr(rect2, "rx", "1.5");
				attr(rect2, "class", "svelte-sdid3b");
				attr(g, "clip-path", "url(#clip0)");
				attr(g, "fill", g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(g, "class", "svelte-sdid3b");
				attr(path1, "fill", "#fff");
				attr(path1, "transform", "translate(0 .5)");
				attr(path1, "d", "M0 0h20v17H0z");
				attr(path1, "class", "svelte-sdid3b");
				attr(clipPath, "id", "clip0");
				attr(clipPath, "class", "svelte-sdid3b");
				attr(defs, "class", "svelte-sdid3b");
				attr(svg1, "class", "menu svelte-sdid3b");
				attr(svg1, "width", "20");
				attr(svg1, "height", "18");
				attr(svg1, "viewBox", "0 0 20 18");
				attr(svg1, "fill", "none");
				attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
				attr(span5, "class", "hamburger-control__open svelte-sdid3b");
				attr(span5, "aria-hidden", "true");
				attr(path2, "d", "M3.304 20.801L11 13.104l7.698 7.697c.296.297.671.449 1.052.449.38 0 .756-.152 1.052-.449a1.459 1.459 0 000-2.104L13.104 11 20.8 3.303a1.459 1.459 0 000-2.104 1.46 1.46 0 00-2.104 0h0L11 8.898 3.301 1.2a1.46 1.46 0 00-2.103 0h0a1.46 1.46 0 000 2.104L8.834 11 1.2 18.697s0 0 0 0a1.458 1.458 0 00-.012 2.092c.255.326.713.461 1.064.461.38 0 .756-.152 1.052-.449h0z");
				attr(path2, "fill", path2_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e");
				attr(path2, "stroke", "#16343e");
				attr(path2, "stroke-width", ".5");
				attr(path2, "class", "svelte-sdid3b");
				attr(svg2, "class", "menu-close svelte-sdid3b");
				attr(svg2, "width", "22");
				attr(svg2, "height", "22");
				attr(svg2, "viewBox", "0 0 22 22");
				attr(svg2, "fill", "none");
				attr(svg2, "xmlns", "http://www.w3.org/2000/svg");
				attr(span6, "class", "hamburger-control__close svelte-sdid3b");
				attr(span6, "aria-hidden", "true");
				attr(span7, "class", "hamburger-control__inner svelte-sdid3b");

				attr(span8, "class", span8_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"));

				attr(span8, "aria-hidden", "true");
				attr(a, "href", "#primary-footer-menu-section");
				attr(a, "class", "mobile-menu-toggle__control js-mobile-menu-control js-open-main-menu svelte-sdid3b");
				attr(a, "role", "button");
				attr(a, "labelledby", "mm-label");
				attr(div1, "class", "site-header__item mobile-menu-toggle col svelte-sdid3b");

				attr(div2, "class", div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"));

				set_style(div2, "width", "100%");

				attr(div3, "class", div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"));

				attr(div4, "class", div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"));

				attr(header, "id", "desktop-header");

				attr(header, "class", header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"));

				set_style(header, "position", "fixed");
				set_style(header, "max-width", "100%");
				set_style(header, "max-height", "108px");
				set_style(header, "height", "75px");
				set_style(header, "z-index", "1");
				attr(br0, "class", "svelte-sdid3b");
				attr(br1, "class", "svelte-sdid3b");
			},
			m(target, anchor) {
				insert(target, header, anchor);
				append(header, div4);
				append(div4, div3);
				append(div3, div2);
				append(div2, div0);
				append(div0, svg0);
				append(svg0, path0);
				append(div0, t0);
				if (if_block0) if_block0.m(div0, null);
				append(div2, t1);
				append(div2, nav);
				if_blocks[current_block_type_index].m(nav, null);
				append(nav, t2);
				append(nav, ul);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(ul, null);
				}

				append(div2, t3);
				append(div2, div1);
				append(div1, a);
				append(a, span4);
				append(span4, span1);
				append(span1, span0);
				append(span0, t4);
				append(span4, t5);
				append(span4, span3);
				append(span3, span2);
				append(span2, t6);
				append(a, t7);
				append(a, span8);
				append(span8, span7);
				append(span7, span5);
				append(span5, svg1);
				append(svg1, g);
				append(g, rect0);
				append(g, rect1);
				append(g, rect2);
				append(svg1, defs);
				append(defs, clipPath);
				append(clipPath, path1);
				append(span7, t8);
				append(span7, span6);
				append(span6, svg2);
				append(svg2, path2);
				insert(target, t9, anchor);
				insert(target, br0, anchor);
				insert(target, t10, anchor);
				insert(target, br1, anchor);
				current = true;
			},
			p(ctx, [dirty]) {
				if (!current || dirty & /*light_on_dark*/ 4 && path0_fill_value !== (path0_fill_value = !!/*light_on_dark*/ ctx[2]
				? /*'#16343e'*/ "#26535c"
				: "#fbf8e9")) {
					attr(path0, "fill", path0_fill_value);
				}

				if (!!/*logo_visible*/ ctx[4]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty & /*logo_visible*/ 16) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_2(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(div0, null);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type_1(ctx);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block1 = if_blocks[current_block_type_index];

					if (!if_block1) {
						if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block1.c();
					}

					transition_in(if_block1, 1);
					if_block1.m(nav, t2);
				}

				if (dirty & /*nav_links, sidebarFunction*/ 10) {
					each_value = /*nav_links*/ ctx[1];
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(ul, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}

				if (!current || dirty & /*light_on_dark*/ 4 && g_fill_value !== (g_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(g, "fill", g_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && path2_fill_value !== (path2_fill_value = !!/*light_on_dark*/ ctx[2] ? "#fbf8e9" : "#16343e")) {
					attr(path2, "fill", path2_fill_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && span8_class_value !== (span8_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark hamburger-control"
				: "hamburger-control") + " svelte-sdid3b"))) {
					attr(span8, "class", span8_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div2_class_value !== (div2_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark row site-header__row justify-content-between align-items-center"
				: "row site-header__row justify-content-between align-items-center") + " svelte-sdid3b"))) {
					attr(div2, "class", div2_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div3_class_value !== (div3_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark container"
				: "container") + " svelte-sdid3b"))) {
					attr(div3, "class", div3_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && div4_class_value !== (div4_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header__inner"
				: "site-header__inner") + " svelte-sdid3b"))) {
					attr(div4, "class", div4_class_value);
				}

				if (!current || dirty & /*light_on_dark*/ 4 && header_class_value !== (header_class_value = "" + (null_to_empty(!!/*light_on_dark*/ ctx[2]
				? "Light-on-Dark site-header"
				: "site-header") + " svelte-sdid3b"))) {
					attr(header, "class", header_class_value);
				}
			},
			i(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d(detaching) {
				if (detaching) detach(header);
				if (if_block0) if_block0.d();
				if_blocks[current_block_type_index].d();
				destroy_each(each_blocks, detaching);
				if (detaching) detach(t9);
				if (detaching) detach(br0);
				if (detaching) detach(t10);
				if (detaching) detach(br1);
			}
		};
	}

	let hide_risi = false;
	let shape_render_duration = 1500;
	let text_render_duration = 500;

	function instance($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		let { light_on_dark = false } = $$props;
		let { innerElms = null } = $$props;

		let { nav_links = [
			{
				label: "About",
				link: "#about/",
				elm() {
					const nav_link = document.createElement("li");

					// <li id="menu-item-12" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item" aria-haspopup="true">
					// <a href="{nav_link.link}" on:click={e => sidebarFunction(e)} role="menuitem" class=" top-level-nav-link">{nav_link.label}</a>
					// <button class="sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target" aria-haspopup="true"><span class="screen-reader-text">Show submenu for “About”</span></button>
					// <!--                                    <ul class="sub-menu menu-odd  menu-depth-1" aria-hidden="true">-->
					// <!--                                        <li id="menu-item-572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-572"><a href="submenu/" role="menuitem" class=" nav-link sub-menu__nav-link">Submenu 1</a></li>-->
					// <!--                                    </ul>-->
					// </li>
					nav_link.className = "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item";

					nav_link.innerHTML = `
                    <a href="${this.link}" onClick="${e => sidebarFunction(e)}" role="menuitem" class=" top-level-nav-link">${this.label}</a>
`;

					console.log(`Resulting nav_link (${this.label})`, nav_link);
					return nav_link;
				},
				fun() {
					
				}
			}
		] } = $$props;

		let { sidebarFunction = evt => {
			console.log("showSidebar", evt);

			evt.target.data = {
				action: "show",
				set: false,
				path: "target" in evt && "hash" in evt.target
				? evt.target.hash
				: ""
			};

			evt.target.dispatchEvent(new CustomEvent("sidebar", evt));
		} } = $$props;

		let { title = "" } = $$props;
		let logo_visible = false;
		let risi_rendered = false;
		let navElms = document.createElement("div");
		const processedElms = {};

		let redraw = function (vis) {
			if (!!vis && !hide_risi && !risi_rendered) {
				$$invalidate(4, logo_visible = true);

				setTimeout(
					() => {
						$$invalidate(5, risi_rendered = true);
					},
					shape_render_duration + text_render_duration
				);

				return true;
			} else if (!logo_visible) {
				$$invalidate(5, risi_rendered = false);
				return false;
			}
		};

		onMount(function () {
			console.log("light_on_dark", light_on_dark);
			$$invalidate(4, logo_visible = true);

			// Set label of first nav link (#about/) to title
			$$invalidate(1, nav_links = nav_links.map((nav_link, i, a) => {
				console.log("title:", title);

				if (!!title && nav_link["link"] === "#about/") {
					nav_link["label"] = title;
				}

				$$invalidate(1, nav_links[i] = nav_link, nav_links);
				console.log("label:", nav_links[i]["label"]);
				return nav_link;
			}));
		});

		const click_handler = e => sidebarFunction(e);

		$$self.$$set = $$props => {
			if ("light_on_dark" in $$props) $$invalidate(2, light_on_dark = $$props.light_on_dark);
			if ("innerElms" in $$props) $$invalidate(0, innerElms = $$props.innerElms);
			if ("nav_links" in $$props) $$invalidate(1, nav_links = $$props.nav_links);
			if ("sidebarFunction" in $$props) $$invalidate(3, sidebarFunction = $$props.sidebarFunction);
			if ("title" in $$props) $$invalidate(7, title = $$props.title);
			if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
		};

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*logo_visible*/ 16) {
				redraw(logo_visible);
			}

			if ($$self.$$.dirty & /*innerElms, processedElms*/ 4097) {
				(function extractLinkContentFromHTML(childElms, targetElms) {
					if (innerElms != null) {
						console.log("extractLinkContentFromHTML:", childElms.innerHTML);
					}

					if (innerElms != null && childElms != null && !!childElms.innerHTML) {
						const childNodes = [...childElms.childNodes]; // shallow copy

						for (const elm of childNodes) {
							// div
							if (elm.nodeType === 1 && elm.className.match(/container-fluid/) !== null) {
								const elm_id = "id" in elm && !!elm.id
								? elm.id
								: elm.innerHTML.toString().substring(0, 16) + elm.className + elm.toString();

								console.log(elm_id, elm);
								const childNodes2 = [...elm.childNodes];

								for (const elm2 of childNodes2) {
									// ul
									if (elm2.nodeType === 1 && elm2.className.match(/navbar-nav/) !== null) {
										const elm_id2 = "id" in elm2 && !!elm2.id
										? elm2.id
										: elm2.innerHTML.toString().substring(0, 16) + elm2.className + elm2.toString();

										const copy_elm = elm2;
										console.log(elm_id2, elm2);
										console.log(`Found ul elm (${elm_id2}). Remove from inner:`, elm2);
										elm.removeChild(elm2);

										if (elm_id2 in processedElms) {
											console.log("Already processed", elm_id2);
										} else if (copy_elm.children.length > 0) {
											console.log("Add ul to nav target:");
											const childNodes3 = [...elm2.childNodes];

											for (const elm3 of childNodes3) {
												// li
												if (elm3.nodeType === 1) {
													const elm_id3 = "id" in elm3 && !!elm3.id
													? elm3.id
													: elm3.innerHTML.toString().substring(0, 16) + elm3.className + elm3.toString();

													const copy_elm = elm3;

													if (!!copy_elm.children[0].innerHTML) {
														// if content of <a> tag is NOT blank
														console.log(`Found link elm (${elm_id3}). Remove from inner:`, elm3);
													} else //
													//                                             if (elm_id3 in processedElms) {
													//                                                 console.log("Already processed", elm_id3);
													//
													//                                             } else if (copy_elm.children.length > 0) {
													//                                                 const new_link = {
													//                                                     label: copy_elm.children[0].innerHTML,
													//                                                     link: (title === copy_elm.children[0].innerHTML) ?
													//                                                         "#about/" :
													//                                                         (copy_elm.children[0].href) ?
													//                                                             copy_elm.children[0].href :
													//                                                             "",
													//                                                     elm: function () {
													//                                                         const nav_link = document.createElement("li");
													//                                                         nav_link.className = ((link_idx === 0) ? "active " : ""); // +
													//                                                         // "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12 col-auto top-level-menu-item"
													//                                                         nav_link.innerHTML = copy_elm.innerHTML;  //`
													// // <a href="${this.link}" onClick="${e => sidebarFunction(e)}" role="menuitem" class=" top-level-nav-link">${this.label}</a>
													// //   <button class="sr-dropdown-button has-dropdown-trigger-indictator dropdown-trigger hover-target" aria-haspopup="true"><span class="screen-reader-text">Show submenu for “About”</span></button>
													// // `
													//                                                         console.log(`Resulting nav_link (${this.label})`, nav_link);
													//                                                         return nav_link;
													//                                                     },
													//                                                     fun: function () {
													//                                                     }
													//                                                 };
													//
													//                                                 if (link_idx > (nav_links.length - 1)) {
													//
													//                                                     console.log(`Update nav_links with append (${link_idx}):`, nav_links);
													//
													//                                                     nav_links = [nav_links, new_link].flat();
													//                                                 } else {
													//
													//                                                     console.log(`Update nav_links with replace (${link_idx}):`, nav_links);
													//
													//                                                     nav_links[link_idx] = new_link;
													//                                                 }
													//
													//                                                 processedElms[elm_id3] = copy_elm;
													//                                                 link_idx++;
													//                                             }
													{
														console.log(`Found blank link elm. Remove from inner:`, elm3); //                                             elm2.removeChild(elm3);
														elm2.removeChild(elm3);
													}
												}
											}

											targetElms.append(copy_elm);
											$$invalidate(12, processedElms[elm_id2] = copy_elm, processedElms);
										}
									}
								}
							}
						}

						// nav_links.forEach((nav_link) => {
						//     console.log("Add link to nav target:", nav_link);
						//     targetElms.append(nav_link.elm());
						// });
						console.log("Resulting target container:", targetElms);
					}

					$$invalidate(0, innerElms = childElms);
				})(innerElms, navElms);
			}
		};

		return [
			innerElms,
			nav_links,
			light_on_dark,
			sidebarFunction,
			logo_visible,
			risi_rendered,
			navElms,
			title,
			$$scope,
			slots,
			click_handler
		];
	}

	class RISIHeader extends SvelteComponent {
		constructor(options) {
			super();
			if (!document_1.getElementById("svelte-sdid3b-style")) add_css();

			init(this, options, instance, create_fragment, safe_not_equal, {
				light_on_dark: 2,
				innerElms: 0,
				nav_links: 1,
				sidebarFunction: 3,
				title: 7
			});
		}
	}

	// Shiny Helper functions
	var recieved_first_shiny_input = {};
	function checkShinyStatus() {
	  return typeof Shiny !== "undefined" && typeof Shiny.setInputValue === "function";
	}
	function setInput(input, value) {
	  if (!!checkShinyStatus()) try {
	    if (!!recieved_first_shiny_input[input]) {
	      recieved_first_shiny_input[input] = true;
	    } else {
	      console.log("Shiny input (\"".concat(input, "\"):"), value);
	      recieved_first_shiny_input[input] = true;
	    } // Shiny.setInputValue(input, value);                      // simple value update; no event for same value


	    Shiny.setInputValue(input, value, {
	      priority: "event"
	    }); // value update with "event" priority for observeEvent
	  } finally {
	    return true;
	  }
	  return false;
	}

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/*
	 * Polyfill for adding CustomEvent
	 * see : https://developer.mozilla.org/fr/docs/Web/API/CustomEvent
	 */

	if (!window.CustomEvent) {
	  // Create only if it doesn't exist
	  (function () {
	    function CustomEvent(event, params) {
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };
	      var evt = document.createEvent('CustomEvent');
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    }
	    CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = CustomEvent;
	  })();
	}

	var shiny_wake_time = 59999;
	var appsId = "apps";
	var appsElement = document.getElementById(appsId);
	var main = // Check if element with id exists in DOM
	appsElement !== null && (appsElement.constructor.name === "HTMLElement" || appsElement.constructor.name === "HTMLBodyElement" || appsElement.constructor.name === "HTMLDivElement") ? new Apps({
	  target: appsElement,
	  props: {
	    attributes: appsElement.attributes,
	    innerElms: function () {
	      var innerElements = document.createElement("div");
	      console.log("Apps pre-mount:", appsElement.innerHTML);

	      var _iterator = _createForOfIteratorHelper(appsElement.childNodes),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var elm = _step.value;

	          // console.log(elm.nodeType, elm.innerHTML);
	          if (elm.nodeType === 1) {
	            innerElements.appendChild(elm);
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      appsElement.innerHTML = "";
	      return innerElements;
	    }(),
	    toggle_sidebar_label: "Toggle Developer Sidebar"
	  },
	  hydrate: true
	}) : {};
	var headerAppId1 = "cori-header";
	var headerAppQuery1 = ".cori * .header";
	var headerAppQuery2 = ".cori * .navbar.navbar-default.navbar-static-top";
	var headerAppElement1 = document.getElementById(headerAppId1) !== null ? function () {
	  var body = (this || window).document.body;
	  console.log(body);
	  var header = (this || window).document.getElementById(headerAppId1);
	  console.log(header);
	  body.style.maxHeight = "348px";
	  body.style.paddingTop = header.offsetHeight + "px";
	  header.style.top = "-" + body.style.paddingTop + "px";
	  return header;
	}() : document.querySelectorAll(headerAppQuery1) !== null && document.querySelectorAll(headerAppQuery1).length > 0 ? function () {
	  var header = (this || window).document.querySelectorAll(headerAppQuery1)[0];
	  console.log(header);
	  return header;
	}() : document.querySelectorAll(headerAppQuery2) !== null && document.querySelectorAll(headerAppQuery2).length > 0 ? function () {
	  var header = (this || window).document.querySelectorAll(headerAppQuery2)[0];
	  console.log(header);
	  return header;
	}() : null;
	var headerApp1 = headerAppElement1 !== null && (headerAppElement1.constructor.name === "HTMLElement" || headerAppElement1.constructor.name === "HTMLDivElement") ? new CORIHeader({
	  target: headerAppElement1,
	  props: {
	    attributes: headerAppElement1.attributes,
	    title: function () {
	      var attributes = headerAppElement1.attributes;
	      return attributes !== null && 'title' in attributes ? attributes['title'].value : 'getElementsByClassName' in headerAppElement1 && typeof headerAppElement1.getElementsByClassName === 'function' && headerAppElement1.getElementsByClassName("container-fluid").length > 0 ? 'getElementsByClassName' in headerAppElement1.getElementsByClassName("container-fluid")[0] && typeof headerAppElement1.getElementsByClassName("container-fluid")[0].getElementsByClassName === 'function' && headerAppElement1.getElementsByClassName("container-fluid")[0].getElementsByClassName("navbar-header").length > 0 ? headerAppElement1.getElementsByClassName("container-fluid")[0].getElementsByClassName("navbar-header")[0].getElementsByClassName("navbar-brand")[0].innerText : "" : "";
	    }(),
	    innerElms: function () {
	      var innerElements = document.createElement("div");
	      console.log("CORIHeader pre-mount:", headerAppElement1.innerHTML);

	      var _iterator2 = _createForOfIteratorHelper(headerAppElement1.childNodes),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var elm = _step2.value;

	          // console.log(elm.nodeType, elm.innerHTML);
	          if (elm.nodeType === 1) {
	            innerElements.appendChild(elm);
	          }
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }

	      console.log(innerElements.innerHTML);
	      headerAppElement1.innerHTML = "";
	      return innerElements;
	    }(),
	    light_on_dark: function () {
	      var attributes = headerAppElement1.attributes;
	      return attributes !== null && 'light_on_dark' in attributes ? !!attributes['light_on_dark'] && attributes['light_on_dark'].value !== 'false' : headerAppElement1.getElementsByClassName("container-fluid") !== null;
	    }()
	  },
	  hydrate: true
	}) : {};
	var headerAppId2 = "risi-header";
	var headerAppQuery3 = ".risi * .header";
	var headerAppQuery4 = ".risi * .navbar.navbar-default.navbar-static-top";
	var headerAppElement2 = document.getElementById(headerAppId2) !== null ? function () {
	  var body = (this || window).document.body;
	  console.log(body);
	  var header = (this || window).document.getElementById(headerAppId2);
	  console.log(header);
	  body.style.maxHeight = "348px";
	  body.style.paddingTop = header.offsetHeight + "px";
	  header.style.top = "-" + body.style.paddingTop + "px";
	  return header;
	}() : document.querySelectorAll(headerAppQuery3) !== null && document.querySelectorAll(headerAppQuery3).length > 0 ? function () {
	  var header = (this || window).document.querySelectorAll(headerAppQuery3)[0];
	  console.log(header);
	  return header;
	}() : document.querySelectorAll(headerAppQuery4) !== null && document.querySelectorAll(headerAppQuery4).length > 0 ? function () {
	  var header = (this || window).document.querySelectorAll(headerAppQuery4)[0];
	  console.log(header);
	  return header;
	}() : null;
	var headerApp2 = headerAppElement2 !== null && (headerAppElement2.constructor.name === "HTMLElement" || headerAppElement2.constructor.name === "HTMLDivElement") ? new RISIHeader({
	  target: headerAppElement2,
	  props: {
	    attributes: headerAppElement2.attributes,
	    title: function () {
	      var attributes = headerAppElement2.attributes;
	      return attributes !== null && 'title' in attributes ? attributes['title'].value : 'getElementsByClassName' in headerAppElement2 && typeof headerAppElement2.getElementsByClassName === 'function' && headerAppElement2.getElementsByClassName("container-fluid").length > 0 ? 'getElementsByClassName' in headerAppElement2.getElementsByClassName("container-fluid")[0] && typeof headerAppElement2.getElementsByClassName("container-fluid")[0].getElementsByClassName === 'function' && headerAppElement2.getElementsByClassName("container-fluid")[0].getElementsByClassName("navbar-header").length > 0 ? headerAppElement2.getElementsByClassName("container-fluid")[0].getElementsByClassName("navbar-header")[0].getElementsByClassName("navbar-brand")[0].innerText : "" : "";
	    }(),
	    innerElms: function () {
	      var innerElements = document.createElement("div");
	      console.log("RISIHeader pre-mount:", headerAppElement2.innerHTML);

	      var _iterator3 = _createForOfIteratorHelper(headerAppElement2.childNodes),
	          _step3;

	      try {
	        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	          var elm = _step3.value;

	          // console.log(elm.nodeType, elm.innerHTML);
	          if (elm.nodeType === 1) {
	            innerElements.appendChild(elm);
	          }
	        }
	      } catch (err) {
	        _iterator3.e(err);
	      } finally {
	        _iterator3.f();
	      }

	      console.log(innerElements.innerHTML);
	      headerAppElement2.innerHTML = "";
	      return innerElements;
	    }(),
	    light_on_dark: function () {
	      var attributes = headerAppElement2.attributes;
	      return attributes !== null && 'light_on_dark' in attributes ? !!attributes['light_on_dark'] && attributes['light_on_dark'].value !== 'false' : headerAppElement2.getElementsByClassName("container-fluid") !== null;
	    }()
	  },
	  hydrate: true
	}) : {};
	var sidebarAppId = "sidebar";
	var sidebarAppElement = document.getElementById(sidebarAppId);
	var sidebarApp = sidebarAppElement !== null && (sidebarAppElement.constructor.name === "HTMLElement" || sidebarAppElement.constructor.name === "HTMLDivElement") ? new Sidebar({
	  target: sidebarAppElement,
	  props: {
	    innerElms: function () {
	      var innerElements = document.createElement("div");
	      console.log("Sidebar pre-mount:", sidebarAppElement.innerHTML);

	      var _iterator4 = _createForOfIteratorHelper(sidebarAppElement.childNodes),
	          _step4;

	      try {
	        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	          var elm = _step4.value;

	          // console.log(elm.nodeType, elm.innerHTML);
	          if (elm.nodeType === 1) {
	            innerElements.appendChild(elm);
	          }
	        }
	      } catch (err) {
	        _iterator4.e(err);
	      } finally {
	        _iterator4.f();
	      }

	      sidebarAppElement.innerHTML = "";
	      return innerElements;
	    }()
	  },
	  hydrate: true
	}) : {};
	var drawLogoTestClass = "draw-logo-test";
	var drawLogoTestElements = document.getElementsByClassName(drawLogoTestClass);
	var drawLogoTestApp = drawLogoTestElements !== null && drawLogoTestElements.length > 0 && (drawLogoTestElements[0].constructor.name === "HTMLElement" || drawLogoTestElements[0].constructor.name === "HTMLDivElement") ? function () {
	  console.log(drawLogoTestElements);
	  var drawLogoTestElement = drawLogoTestElements[0]; // const drawLogoTests = [];
	  // for (const drawLogoTestElement of drawLogoTestElements) {
	  //     drawLogoTests.push(

	  return new DrawLogoTest({
	    target: drawLogoTestElement,
	    props: {
	      innerElms: function () {
	        var innerElements = document.createElement("div");
	        console.log("Draw logo pre-mount:", drawLogoTestElement.innerHTML);

	        var _iterator5 = _createForOfIteratorHelper(drawLogoTestElement.childNodes),
	            _step5;

	        try {
	          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	            var elm = _step5.value;

	            // console.log(elm.nodeType, elm.innerHTML);
	            if (elm.nodeType === 1) {
	              innerElements.appendChild(elm);
	            }
	          }
	        } catch (err) {
	          _iterator5.e(err);
	        } finally {
	          _iterator5.f();
	        }

	        drawLogoTestElement.innerHTML = "";
	        return innerElements;
	      }()
	    },
	    hydrate: true
	  }); //     );
	  // }
	  // return drawLogoTests;
	}() : [];

	(function () {
	  // Wait a ~ sec to start wake timer
	  setTimeout(function () {
	    console.log("Send input to shiny server every ~ " + Math.round(shiny_wake_time / 1000) + " seconds to let it know the client is still active");
	    setInterval(function () {
	      // if (!shiny_module_handler_set) {
	      setInput("wake", Math.random()); // }
	    }, shiny_wake_time);
	  }, 1533);
	})();

	exports["default"] = main;
	exports.drawLogoTestApp = drawLogoTestApp;
	exports.headerApp1 = headerApp1;
	exports.headerApp2 = headerApp2;
	exports.sidebarApp = sidebarApp;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
//# sourceMappingURL=bundle.js.map
