/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/

;// external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// ./src/app/app.service.ts
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var AppService = /*#__PURE__*/ function() {
    "use strict";
    function AppService() {}
    var _proto = AppService.prototype;
    _proto.getData = function getData() {
        return {
            message: 'Hello API'
        };
    };
    return AppService;
}();
AppService = _ts_decorate([
    (0,common_namespaceObject.Injectable)()
], AppService);

;// ./src/app/app.controller.ts
function app_controller_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}


var AppController = /*#__PURE__*/ function() {
    "use strict";
    function AppController(appService) {
        this.appService = appService;
    }
    var _proto = AppController.prototype;
    _proto.getData = function getData() {
        return this.appService.getData();
    };
    return AppController;
}();
app_controller_ts_decorate([
    (0,common_namespaceObject.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = app_controller_ts_decorate([
    (0,common_namespaceObject.Controller)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AppService === "undefined" ? Object : AppService
    ])
], AppController);

;// external "@nestjs/mongoose"
const mongoose_namespaceObject = require("@nestjs/mongoose");
;// external "ioredis"
const external_ioredis_namespaceObject = require("ioredis");
var external_ioredis_default = /*#__PURE__*/__webpack_require__.n(external_ioredis_namespaceObject);
;// ../../libs/todo-agent/src/lib/common/env.config.ts
Object.defineProperty(env_config, "name", { value: "default", configurable: true });
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var env = {
    mongo_db_url: process.env['MONGO_URI'] || function() {
        throw new Error("MONGO_URI is not defined");
    }(),
    openai_api_key: process.env['OPENAI_API_KEY'] || function() {
        throw new Error("OPENAI_API_KEY is not defined");
    }(),
    redis_host: process.env['REDIS_HOST'] || function() {
        throw new Error("REDIS_HOST is not defined");
    }(),
    redis_port: process.env['REDIS_PORT'] || function() {
        throw new Error("REDIS_PORT is not defined");
    }()
};
/* harmony default export */ function env_config() {
    return _extends({}, env);
};

;// ../../libs/todo-agent/src/lib/agent/memory/redis.provider.ts


var redisProvider = {
    provide: 'REDIS_CLIENT',
    useFactory: function useFactory() {
        return new (external_ioredis_default())({
            host: env.redis_host,
            port: Number(env.redis_port)
        });
    }
};

;// ../../libs/todo-agent/src/lib/agent/memory/radis.service.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function radis_service_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function radis_service_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}


var RadisMemoryService = /*#__PURE__*/ function() {
    "use strict";
    function RadisMemoryService(redis) {
        this.redis = redis;
    }
    var _proto = RadisMemoryService.prototype;
    _proto.setSession = function setSession(sessionId, data) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.redis.set("session:" + sessionId, JSON.stringify(data), 'EX', 3600)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }).call(this);
    };
    _proto.getSession = function getSession(sessionId) {
        return _async_to_generator(function() {
            var data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.redis.get("session:" + sessionId)
                        ];
                    case 1:
                        data = _state.sent();
                        return [
                            2,
                            data ? JSON.parse(data) : []
                        ];
                }
            });
        }).call(this);
    };
    _proto.clearSession = function clearSession(sessionId) {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.redis.del("session:" + sessionId)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }).call(this);
    };
    return RadisMemoryService;
}();
RadisMemoryService = radis_service_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    _ts_param(0, (0,common_namespaceObject.Inject)('REDIS_CLIENT')),
    radis_service_ts_metadata("design:type", Function),
    radis_service_ts_metadata("design:paramtypes", [
        typeof (external_ioredis_default()) === "undefined" ? Object : (external_ioredis_default())
    ])
], RadisMemoryService);

;// external "@langchain/core/messages"
const messages_namespaceObject = require("@langchain/core/messages");
;// external "@langchain/openai"
const openai_namespaceObject = require("@langchain/openai");
;// external "@nestjs/config"
const config_namespaceObject = require("@nestjs/config");
;// ../../libs/todo-agent/src/lib/common/llm.service.ts
function llm_service_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function llm_service_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var LLMClient = /*#__PURE__*/ function() {
    "use strict";
    function LLMClient(configService) {
        this.configService = configService;
        this.client = new openai_namespaceObject.ChatOpenAI({
            model: 'gpt-4o-mini',
            apiKey: this.configService.get('openai_api_key'),
            temperature: 0
        });
    }
    var _proto = LLMClient.prototype;
    _proto.getClient = function getClient(tools) {
        if (tools === void 0) tools = null;
        if (!tools) return this.client;
        return this.client.bindTools(tools);
    };
    return LLMClient;
}();
LLMClient = llm_service_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    llm_service_ts_metadata("design:type", Function),
    llm_service_ts_metadata("design:paramtypes", [
        typeof config_namespaceObject.ConfigService === "undefined" ? Object : config_namespaceObject.ConfigService
    ])
], LLMClient);

;// external "@langchain/core/tools"
const tools_namespaceObject = require("@langchain/core/tools");
;// external "zod"
const external_zod_namespaceObject = require("zod");
;// external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
;// ../../libs/todo-agent/src/lib/database/schemas/todo.schema.ts
function todo_schema_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function todo_schema_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var TodoPriority = /*#__PURE__*/ function(TodoPriority) {
    TodoPriority["LOW"] = "low";
    TodoPriority["MEDIUM"] = "medium";
    TodoPriority["HIGH"] = "high";
    return TodoPriority;
}({});
var Todo = function Todo() {
    "use strict";
};
todo_schema_ts_decorate([
    (0,mongoose_namespaceObject.Prop)({
        type: String,
        required: true
    }),
    todo_schema_ts_metadata("design:type", String)
], Todo.prototype, "task", void 0);
todo_schema_ts_decorate([
    (0,mongoose_namespaceObject.Prop)({
        type: String,
        enum: TodoPriority,
        default: "medium"
    }),
    todo_schema_ts_metadata("design:type", String)
], Todo.prototype, "priority", void 0);
todo_schema_ts_decorate([
    (0,mongoose_namespaceObject.Prop)({
        type: Boolean,
        default: false
    }),
    todo_schema_ts_metadata("design:type", Boolean)
], Todo.prototype, "isCompleted", void 0);
Todo = todo_schema_ts_decorate([
    (0,mongoose_namespaceObject.Schema)({
        timestamps: true
    })
], Todo);
var TodoSchema = mongoose_namespaceObject.SchemaFactory.createForClass(Todo);

;// ../../libs/todo-agent/src/lib/database/repositories/todo.repository.ts
function todo_repository_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function todo_repository_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                todo_repository_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                todo_repository_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function todo_repository_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function todo_repository_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function todo_repository_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function todo_repository_ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}




var TodoRepository = function TodoRepository(todoModel) {
    "use strict";
    var _this = this;
    this.todoModel = todoModel;
    this.createTodo = function(data) {
        return todo_repository_async_to_generator(function() {
            var created, saved;
            return todo_repository_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        created = new this.todoModel(data);
                        return [
                            4,
                            created.save()
                        ];
                    case 1:
                        saved = _state.sent();
                        return [
                            2,
                            saved._id.toString()
                        ];
                }
            });
        }).call(_this);
    };
    this.findAllTodo = function() {
        return todo_repository_async_to_generator(function() {
            return todo_repository_ts_generator(this, function(_state) {
                return [
                    2,
                    this.todoModel.find().lean().exec()
                ];
            });
        }).call(_this);
    };
    this.deleteTodo = function(id) {
        return todo_repository_async_to_generator(function() {
            return todo_repository_ts_generator(this, function(_state) {
                return [
                    2,
                    this.todoModel.findByIdAndDelete(id).lean().exec()
                ];
            });
        }).call(_this);
    };
    this.searchTodo = function(query) {
        return todo_repository_async_to_generator(function() {
            return todo_repository_ts_generator(this, function(_state) {
                return [
                    2,
                    this.todoModel.find({
                        task: {
                            $regex: query,
                            $options: 'i'
                        }
                    }).lean().exec()
                ];
            });
        }).call(_this);
    };
};
TodoRepository = todo_repository_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    todo_repository_ts_param(0, (0,mongoose_namespaceObject.InjectModel)(Todo.name)),
    todo_repository_ts_metadata("design:type", Function),
    todo_repository_ts_metadata("design:paramtypes", [
        typeof external_mongoose_namespaceObject.Model === "undefined" ? Object : external_mongoose_namespaceObject.Model
    ])
], TodoRepository);

;// ../../libs/todo-agent/src/lib/agent/tools/create-todo.tool.ts
function create_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function create_todo_tool_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                create_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                create_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function create_todo_tool_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function create_todo_tool_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function create_todo_tool_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var CreateTodoTool = /*#__PURE__*/ function() {
    "use strict";
    function CreateTodoTool(todoRepository) {
        var _this = this;
        this.todoRepository = todoRepository;
        this.name = 'createTodo';
        this.description = "Create a new todo in database.";
        this.schema = external_zod_namespaceObject.z.object({
            task: external_zod_namespaceObject.z.string(),
            priority: external_zod_namespaceObject.z.enum([
                'low',
                'medium',
                'high'
            ]),
            isCompleted: external_zod_namespaceObject.z.boolean(),
            createdAt: external_zod_namespaceObject.z.string(),
            updatedAt: external_zod_namespaceObject.z.string()
        });
        this.func = function(data) {
            return create_todo_tool_async_to_generator(function() {
                return create_todo_tool_ts_generator(this, function(_state) {
                    return [
                        2,
                        this.todoRepository.createTodo(data)
                    ];
                });
            }).call(_this);
        };
    }
    var _proto = CreateTodoTool.prototype;
    _proto.getTool = function getTool() {
        return new tools_namespaceObject.DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func
        });
    };
    return CreateTodoTool;
}();
CreateTodoTool = create_todo_tool_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    create_todo_tool_ts_metadata("design:type", Function),
    create_todo_tool_ts_metadata("design:paramtypes", [
        typeof TodoRepository === "undefined" ? Object : TodoRepository
    ])
], CreateTodoTool);

;// ../../libs/todo-agent/src/lib/agent/tools/list-todo.tool.ts
function list_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function list_todo_tool_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                list_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                list_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function list_todo_tool_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function list_todo_tool_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function list_todo_tool_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var ListTodoTool = /*#__PURE__*/ function() {
    "use strict";
    function ListTodoTool(todoRepository) {
        var _this = this;
        this.todoRepository = todoRepository;
        this.name = 'findAllTodo';
        this.description = "Fetch all todos.";
        this.schema = external_zod_namespaceObject.z.object({});
        this.func = function() {
            return list_todo_tool_async_to_generator(function() {
                return list_todo_tool_ts_generator(this, function(_state) {
                    return [
                        2,
                        this.todoRepository.findAllTodo()
                    ];
                });
            }).call(_this);
        };
    }
    var _proto = ListTodoTool.prototype;
    _proto.getTool = function getTool() {
        return new tools_namespaceObject.DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func
        });
    };
    return ListTodoTool;
}();
ListTodoTool = list_todo_tool_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    list_todo_tool_ts_metadata("design:type", Function),
    list_todo_tool_ts_metadata("design:paramtypes", [
        typeof TodoRepository === "undefined" ? Object : TodoRepository
    ])
], ListTodoTool);

;// ../../libs/todo-agent/src/lib/agent/tools/delete-todo.tool.ts
function delete_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function delete_todo_tool_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                delete_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                delete_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function delete_todo_tool_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function delete_todo_tool_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function delete_todo_tool_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var DeleteTodoTool = /*#__PURE__*/ function() {
    "use strict";
    function DeleteTodoTool(todoRepository) {
        var _this = this;
        this.todoRepository = todoRepository;
        this.name = 'deleteTodo';
        this.description = "Delete todo by id.";
        this.schema = external_zod_namespaceObject.z.object({
            id: external_zod_namespaceObject.z.string()
        });
        this.func = function(param) {
            var id = param.id;
            return delete_todo_tool_async_to_generator(function() {
                return delete_todo_tool_ts_generator(this, function(_state) {
                    return [
                        2,
                        this.todoRepository.deleteTodo(id)
                    ];
                });
            }).call(_this);
        };
    }
    var _proto = DeleteTodoTool.prototype;
    _proto.getTool = function getTool() {
        return new tools_namespaceObject.DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func
        });
    };
    return DeleteTodoTool;
}();
DeleteTodoTool = delete_todo_tool_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    delete_todo_tool_ts_metadata("design:type", Function),
    delete_todo_tool_ts_metadata("design:paramtypes", [
        typeof TodoRepository === "undefined" ? Object : TodoRepository
    ])
], DeleteTodoTool);

;// ../../libs/todo-agent/src/lib/agent/tools/search-todo.tool.ts
function search_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function search_todo_tool_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                search_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                search_todo_tool_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function search_todo_tool_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function search_todo_tool_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function search_todo_tool_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var SearchTodoTool = /*#__PURE__*/ function() {
    "use strict";
    function SearchTodoTool(todoRepository) {
        var _this = this;
        this.todoRepository = todoRepository;
        this.name = 'searchTodo';
        this.description = "Search todos using query.";
        this.schema = external_zod_namespaceObject.z.object({
            query: external_zod_namespaceObject.z.string()
        });
        this.func = function(param) {
            var query = param.query;
            return search_todo_tool_async_to_generator(function() {
                return search_todo_tool_ts_generator(this, function(_state) {
                    return [
                        2,
                        this.todoRepository.searchTodo(query)
                    ];
                });
            }).call(_this);
        };
    }
    var _proto = SearchTodoTool.prototype;
    _proto.getTool = function getTool() {
        return new tools_namespaceObject.DynamicStructuredTool({
            name: this.name,
            description: this.description,
            schema: this.schema,
            func: this.func
        });
    };
    return SearchTodoTool;
}();
SearchTodoTool = search_todo_tool_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    search_todo_tool_ts_metadata("design:type", Function),
    search_todo_tool_ts_metadata("design:paramtypes", [
        typeof TodoRepository === "undefined" ? Object : TodoRepository
    ])
], SearchTodoTool);

;// ../../libs/todo-agent/src/lib/agent/tools/tool.registry.ts
function tool_registry_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function tool_registry_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}





var ToolRegistry = /*#__PURE__*/ function() {
    "use strict";
    function ToolRegistry(createTodoTool, listTodoTool, deleteTodoTool, searchTodoTool) {
        var _this = this;
        this.createTodoTool = createTodoTool;
        this.listTodoTool = listTodoTool;
        this.deleteTodoTool = deleteTodoTool;
        this.searchTodoTool = searchTodoTool;
        this.getToolsMyName = function() {
            return Object.fromEntries(_this.getTools().map(function(t) {
                return [
                    t.name,
                    t
                ];
            }));
        };
    }
    var _proto = ToolRegistry.prototype;
    _proto.getTools = function getTools() {
        return [
            this.createTodoTool.getTool(),
            this.listTodoTool.getTool(),
            this.deleteTodoTool.getTool(),
            this.searchTodoTool.getTool()
        ];
    };
    return ToolRegistry;
}();
ToolRegistry = tool_registry_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    tool_registry_ts_metadata("design:type", Function),
    tool_registry_ts_metadata("design:paramtypes", [
        typeof CreateTodoTool === "undefined" ? Object : CreateTodoTool,
        typeof ListTodoTool === "undefined" ? Object : ListTodoTool,
        typeof DeleteTodoTool === "undefined" ? Object : DeleteTodoTool,
        typeof SearchTodoTool === "undefined" ? Object : SearchTodoTool
    ])
], ToolRegistry);

;// ../../libs/todo-agent/src/lib/agent/nodes/llm.node.ts
function llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function llm_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function llm_node_extends() {
    llm_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return llm_node_extends.apply(this, arguments);
}
function llm_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function llm_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function llm_node_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var LLMNode = function LLMNode(llMClient, toolRegistry) {
    "use strict";
    var _this = this;
    this.llMClient = llMClient;
    this.toolRegistry = toolRegistry;
    this.client = this.llMClient.getClient(this.toolRegistry.getTools());
    this.manageMemory = function(memory) {
        var memoryContext = 'No prior memory';
        if (!memory) return memoryContext;
        memoryContext = memory == null ? void 0 : memory.slice(-5).map(function(m) {
            return m.type + ": " + m.message;
        }).join('\n');
        return memoryContext;
    };
    this.systemPrompt = function(state) {
        var memoryContext = _this.manageMemory(state == null ? void 0 : state.memory);
        var systemMessage = "\n        You are an AI Todo Assistant.\n\n        Recent Conversation:\n        " + memoryContext + "\n\n        Use this when relevant.\n    ";
        return systemMessage;
    };
    this.execute = function(state) {
        return llm_node_async_to_generator(function() {
            var systemPrompt, response;
            return llm_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        systemPrompt = this.systemPrompt(state);
                        return [
                            4,
                            this.client.invoke([].concat([
                                new messages_namespaceObject.SystemMessage(systemPrompt)
                            ], state.messages))
                        ];
                    case 1:
                        response = _state.sent();
                        return [
                            2,
                            llm_node_extends({}, state, {
                                messages: [].concat(state.messages, [
                                    response
                                ])
                            })
                        ];
                }
            });
        }).call(_this);
    };
};
LLMNode = llm_node_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    llm_node_ts_metadata("design:type", Function),
    llm_node_ts_metadata("design:paramtypes", [
        typeof LLMClient === "undefined" ? Object : LLMClient,
        typeof ToolRegistry === "undefined" ? Object : ToolRegistry
    ])
], LLMNode);

;// ../../libs/todo-agent/src/lib/agent/nodes/tool.node.ts
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function tool_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function tool_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                tool_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                tool_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function tool_node_extends() {
    tool_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return tool_node_extends.apply(this, arguments);
}
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _create_for_of_iterator_helper_loose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupported_iterable_to_array(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) {
                return {
                    done: true
                };
            }
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function tool_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function tool_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function tool_node_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var ToolNode = function ToolNode(toolRegistry) {
    "use strict";
    var _this = this;
    this.toolRegistry = toolRegistry;
    this.execute = function(state) {
        return tool_node_async_to_generator(function() {
            var _lastMessage_tool_calls, lastMessage, toolCalls, toolMessages, _iterator, _step, call, tool, observation;
            return tool_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lastMessage = state.messages[state.messages.length - 1];
                        if (!_instanceof(lastMessage, messages_namespaceObject.AIMessage)) {
                            return [
                                2,
                                state
                            ];
                        }
                        toolCalls = (_lastMessage_tool_calls = lastMessage.tool_calls) != null ? _lastMessage_tool_calls : [];
                        toolMessages = [];
                        _iterator = _create_for_of_iterator_helper_loose(toolCalls);
                        _state.label = 1;
                    case 1:
                        if (!!(_step = _iterator()).done) return [
                            3,
                            4
                        ];
                        call = _step.value;
                        tool = this.toolRegistry.getToolsMyName()[call.name];
                        if (!tool) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            tool.invoke(call.args)
                        ];
                    case 2:
                        observation = _state.sent();
                        toolMessages.push(new messages_namespaceObject.ToolMessage({
                            content: JSON.stringify(observation),
                            tool_call_id: call.id
                        }));
                        _state.label = 3;
                    case 3:
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            2,
                            tool_node_extends({}, state, {
                                messages: [].concat(state.messages, toolMessages)
                            })
                        ];
                }
            });
        }).call(_this);
    };
};
ToolNode = tool_node_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    tool_node_ts_metadata("design:type", Function),
    tool_node_ts_metadata("design:paramtypes", [
        typeof ToolRegistry === "undefined" ? Object : ToolRegistry
    ])
], ToolNode);

;// ../../libs/todo-agent/src/lib/agent/nodes/memory.node.ts
function memory_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function memory_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                memory_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                memory_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function memory_node_extends() {
    memory_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return memory_node_extends.apply(this, arguments);
}
function memory_node_instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function memory_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function memory_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function memory_node_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var MemoryNode = function MemoryNode(radisMemory) {
    "use strict";
    var _this = this;
    this.radisMemory = radisMemory;
    this.get = function(state) {
        return memory_node_async_to_generator(function() {
            var memory;
            return memory_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.radisMemory.getSession(state.sessionId)
                        ];
                    case 1:
                        memory = _state.sent();
                        return [
                            2,
                            memory_node_extends({}, state, {
                                memory: memory
                            })
                        ];
                }
            });
        }).call(_this);
    };
    this.update = function(state) {
        return memory_node_async_to_generator(function() {
            var stateMemory, messageToMemory, memory;
            return memory_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stateMemory = state.memory;
                        messageToMemory = this.messageToMemory(state);
                        memory = Array.from(new Map([].concat(stateMemory, messageToMemory).map(function(item) {
                            return [
                                item.id,
                                item
                            ];
                        })).values());
                        return [
                            4,
                            this.radisMemory.setSession(state.sessionId, memory)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            memory_node_extends({}, state, {
                                memory: memory
                            })
                        ];
                }
            });
        }).call(_this);
    };
    this.messageToMemory = function(state) {
        // Filter messages
        var messages = state.messages.filter(function(m) {
            return memory_node_instanceof(m, messages_namespaceObject.AIMessage) || memory_node_instanceof(m, messages_namespaceObject.HumanMessage);
        });
        // Convert message to memory element
        var messageToMemory = messages.map(function(msg) {
            return {
                id: msg.id,
                type: msg.type === 'human' ? 'user' : 'assistant',
                message: msg.content
            };
        }).filter(function(item) {
            return item.message;
        });
        return messageToMemory;
    };
};
MemoryNode = memory_node_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    memory_node_ts_metadata("design:type", Function),
    memory_node_ts_metadata("design:paramtypes", [
        typeof RadisMemoryService === "undefined" ? Object : RadisMemoryService
    ])
], MemoryNode);

;// external "@langchain/langgraph"
const langgraph_namespaceObject = require("@langchain/langgraph");
;// external "zod/v4"
const v4_namespaceObject = require("zod/v4");
;// ../../libs/todo-agent/src/lib/agent/state.ts


var AgentState = new langgraph_namespaceObject.StateSchema({
    messages: langgraph_namespaceObject.MessagesValue,
    memory: v4_namespaceObject.z.array(v4_namespaceObject.z.object()).default([]),
    sessionId: v4_namespaceObject.z.string()
});

;// ../../libs/todo-agent/src/lib/agent/graph.ts
function graph_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function graph_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}






var ChatGraph = /*#__PURE__*/ function() {
    "use strict";
    function ChatGraph(llmNode, memoryNode, tooNode) {
        this.llmNode = llmNode;
        this.memoryNode = memoryNode;
        this.tooNode = tooNode;
        this.shouldContinue = function(state) {
            var _lastMessage_tool_calls;
            var lastMessage = state.messages[state.messages.length - 1];
            if ((_lastMessage_tool_calls = lastMessage.tool_calls) == null ? void 0 : _lastMessage_tool_calls.length) {
                return 'toolNode';
            }
            return langgraph_namespaceObject.END;
        };
    }
    var _proto = ChatGraph.prototype;
    _proto.build = function build() {
        var _obj;
        return new langgraph_namespaceObject.StateGraph(AgentState).addNode('memoryGet', this.memoryNode.get).addNode('llmNode', this.llmNode.execute).addNode('toolNode', this.tooNode.execute).addNode('memoryUpdate', this.memoryNode.update).addEdge(langgraph_namespaceObject.START, 'memoryGet').addEdge('memoryGet', 'llmNode').addEdge('llmNode', 'memoryUpdate').addConditionalEdges('memoryUpdate', this.shouldContinue, (_obj = {
            toolNode: 'toolNode'
        }, _obj[langgraph_namespaceObject.END] = langgraph_namespaceObject.END, _obj)).addEdge('toolNode', 'llmNode').compile();
    };
    return ChatGraph;
}();
ChatGraph = graph_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    graph_ts_metadata("design:type", Function),
    graph_ts_metadata("design:paramtypes", [
        typeof LLMNode === "undefined" ? Object : LLMNode,
        typeof MemoryNode === "undefined" ? Object : MemoryNode,
        typeof ToolNode === "undefined" ? Object : ToolNode
    ])
], ChatGraph);

;// ../../libs/todo-agent/src/lib/agent/agent.ts
function agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function agent_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function agent_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function agent_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function agent_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var AgentRuntimeService = /*#__PURE__*/ function() {
    "use strict";
    function AgentRuntimeService(chatGraph, mempory) {
        var _this = this;
        this.chatGraph = chatGraph;
        this.mempory = mempory;
        this.memory = function(sessionId) {
            return _this.mempory.getSession(sessionId);
        };
        this.graph = this.chatGraph.build();
    }
    var _proto = AgentRuntimeService.prototype;
    _proto.invoke = function invoke() {
        return agent_async_to_generator(function(param) {
            var message, sessionId, result;
            return agent_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        message = param.message, sessionId = param.sessionId;
                        return [
                            4,
                            this.graph.invoke({
                                messages: [
                                    new messages_namespaceObject.HumanMessage(message)
                                ],
                                sessionId: sessionId
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            {
                                messages: result.memory,
                                sessionId: result.sessionId
                            }
                        ];
                }
            });
        }).apply(this, arguments);
    };
    return AgentRuntimeService;
}();
AgentRuntimeService = agent_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    agent_ts_metadata("design:type", Function),
    agent_ts_metadata("design:paramtypes", [
        typeof ChatGraph === "undefined" ? Object : ChatGraph,
        typeof RadisMemoryService === "undefined" ? Object : RadisMemoryService
    ])
], AgentRuntimeService);

;// ../../libs/todo-agent/src/lib/agent/agent.module.ts
function agent_module_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

















var AgentModule = function AgentModule() {
    "use strict";
};
AgentModule = agent_module_ts_decorate([
    (0,common_namespaceObject.Module)({
        imports: [
            mongoose_namespaceObject.MongooseModule.forFeature([
                {
                    name: Todo.name,
                    schema: TodoSchema
                }
            ])
        ],
        providers: [
            // Common
            redisProvider,
            RadisMemoryService,
            LLMClient,
            // Nodes
            LLMNode,
            ToolNode,
            MemoryNode,
            // Tools
            CreateTodoTool,
            ListTodoTool,
            SearchTodoTool,
            DeleteTodoTool,
            ToolRegistry,
            // Graph
            ChatGraph,
            // Agent
            AgentRuntimeService,
            // Database
            TodoRepository
        ],
        exports: [
            AgentRuntimeService
        ]
    })
], AgentModule);

;// external "joi"
const external_joi_namespaceObject = require("joi");
;// ../../libs/todo-agent/src/lib/common/env.validation.ts

var envValidationSchema = external_joi_namespaceObject.object({
    OPENAI_API_KEY: external_joi_namespaceObject.string().required(),
    REDIS_HOST: external_joi_namespaceObject.string().required(),
    REDIS_PORT: external_joi_namespaceObject.number().required()
});

;// external "rxjs"
const external_rxjs_namespaceObject = require("rxjs");
;// ../../libs/todo-agent/src/lib/toto.controller.ts
function toto_controller_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function toto_controller_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                toto_controller_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                toto_controller_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function toto_controller_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function toto_controller_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function toto_controller_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function toto_controller_ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}



var TodoController = /*#__PURE__*/ function() {
    "use strict";
    function TodoController(runtime) {
        this.runtime = runtime;
    }
    var _proto = TodoController.prototype;
    _proto.todoAgent = function todoAgent(sessionId, body) {
        return this.runtime.invoke({
            message: body.query,
            sessionId: sessionId
        });
    };
    _proto.get = function get(sessionId) {
        return toto_controller_async_to_generator(function() {
            return toto_controller_ts_generator(this, function(_state) {
                return [
                    2,
                    this.runtime.memory(sessionId)
                ];
            });
        }).call(this);
    };
    _proto.stream = function stream() {
        return new external_rxjs_namespaceObject.Observable(function(subscriber) {
            var _loop = function(index) {
                setTimeout(function() {
                    var isLast = index + 1 === messages.length;
                    subscriber.next({
                        data: {
                            status: isLast ? 'Completed' : 'InProgress',
                            message: messages[index]
                        }
                    });
                    if (isLast) {
                        subscriber.complete();
                    }
                }, 1000 * index);
            };
            var messages = [
                'Analyzing request...',
                'Checking memory...',
                'Planning response...',
                'Generating final answer...',
                'final response'
            ];
            for(var index = 0; index < messages.length; index++)_loop(index);
        });
    };
    return TodoController;
}();
toto_controller_ts_decorate([
    (0,common_namespaceObject.Post)(':sessionId'),
    toto_controller_ts_param(0, (0,common_namespaceObject.Param)('sessionId')),
    toto_controller_ts_param(1, (0,common_namespaceObject.Body)()),
    toto_controller_ts_metadata("design:type", Function),
    toto_controller_ts_metadata("design:paramtypes", [
        String,
        Object
    ]),
    toto_controller_ts_metadata("design:returntype", void 0)
], TodoController.prototype, "todoAgent", null);
toto_controller_ts_decorate([
    (0,common_namespaceObject.Get)(':sessionId'),
    toto_controller_ts_param(0, (0,common_namespaceObject.Param)('sessionId')),
    toto_controller_ts_metadata("design:type", Function),
    toto_controller_ts_metadata("design:paramtypes", [
        String
    ]),
    toto_controller_ts_metadata("design:returntype", Promise)
], TodoController.prototype, "get", null);
toto_controller_ts_decorate([
    (0,common_namespaceObject.Sse)('stream'),
    toto_controller_ts_metadata("design:type", Function),
    toto_controller_ts_metadata("design:paramtypes", []),
    toto_controller_ts_metadata("design:returntype", typeof external_rxjs_namespaceObject.Observable === "undefined" ? Object : external_rxjs_namespaceObject.Observable)
], TodoController.prototype, "stream", null);
TodoController = toto_controller_ts_decorate([
    (0,common_namespaceObject.Controller)('todo'),
    toto_controller_ts_metadata("design:type", Function),
    toto_controller_ts_metadata("design:paramtypes", [
        typeof AgentRuntimeService === "undefined" ? Object : AgentRuntimeService
    ])
], TodoController);

;// ../../libs/todo-agent/src/lib/stream.conroller.ts
function stream_conroller_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function stream_conroller_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}


var StreamController = /*#__PURE__*/ function() {
    "use strict";
    function StreamController() {}
    var _proto = StreamController.prototype;
    _proto.stream = function stream() {
        return new external_rxjs_namespaceObject.Observable(function(subscriber) {
            var _loop = function(index) {
                setTimeout(function() {
                    var isLast = index + 1 === messages.length;
                    subscriber.next({
                        data: {
                            status: isLast ? 'Completed' : 'InProgress',
                            message: messages[index]
                        }
                    });
                    if (isLast) {
                        subscriber.complete();
                    }
                }, 1000 * index);
            };
            var messages = [
                'Analyzing request...',
                'Checking memory...',
                'Planning response...',
                'Generating final answer...',
                'final response'
            ];
            for(var index = 0; index < messages.length; index++)_loop(index);
        });
    };
    return StreamController;
}();
stream_conroller_ts_decorate([
    (0,common_namespaceObject.Sse)(),
    stream_conroller_ts_metadata("design:type", Function),
    stream_conroller_ts_metadata("design:paramtypes", []),
    stream_conroller_ts_metadata("design:returntype", typeof external_rxjs_namespaceObject.Observable === "undefined" ? Object : external_rxjs_namespaceObject.Observable)
], StreamController.prototype, "stream", null);
StreamController = stream_conroller_ts_decorate([
    (0,common_namespaceObject.Controller)('stream')
], StreamController);

;// ../../libs/todo-agent/src/lib/todo-agent.module.ts
function todo_agent_module_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}








var TodoAgentModule = function TodoAgentModule() {
    "use strict";
};
TodoAgentModule = todo_agent_module_ts_decorate([
    (0,common_namespaceObject.Module)({
        imports: [
            config_namespaceObject.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [
                    env_config
                ],
                validationSchema: envValidationSchema
            }),
            mongoose_namespaceObject.MongooseModule.forRoot(env_config().mongo_db_url),
            AgentModule
        ],
        controllers: [
            TodoController,
            StreamController
        ],
        providers: []
    })
], TodoAgentModule);

;// ../../libs/todo-agent/src/index.ts


;// ../../libs/ng-pr-review-agent/src/lib/agent/state.ts


var ReviewCommentSchema = v4_namespaceObject.z.array(v4_namespaceObject.z.object({
    message: v4_namespaceObject.z.string(),
    line: v4_namespaceObject.z.number(),
    severity: v4_namespaceObject.z.enum([
        "Critical",
        "Major",
        "Minor"
    ]),
    category: v4_namespaceObject.z.string(),
    suggestion: v4_namespaceObject.z.string(),
    confidence: v4_namespaceObject.z.number(),
    path: v4_namespaceObject.z.string(),
    body: v4_namespaceObject.z.unknown().default('')
}));
var state_AgentState = new langgraph_namespaceObject.StateSchema({
    // messages: MessagesValue, // Prebuilt messages value with built-in reducer
    owner: v4_namespaceObject.z.string().default(''),
    repo: v4_namespaceObject.z.string().default(''),
    pullNumber: v4_namespaceObject.z.number(),
    files: v4_namespaceObject.z.array(v4_namespaceObject.z.unknown()).default([]),
    commitId: v4_namespaceObject.z.string().default(''),
    oldComments: v4_namespaceObject.z.array(v4_namespaceObject.z.object({
        id: v4_namespaceObject.z.number(),
        path: v4_namespaceObject.z.string(),
        line: v4_namespaceObject.z.number()
    })).default([]),
    newComments: ReviewCommentSchema
});

;// external "fs"
const external_fs_namespaceObject = require("fs");
;// external "path"
const external_path_namespaceObject = require("path");
;// ../../libs/ng-pr-review-agent/src/lib/common/llm.service.ts
function common_llm_service_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function common_llm_service_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var llm_service_LLMClient = /*#__PURE__*/ function() {
    "use strict";
    function LLMClient(configService) {
        this.configService = configService;
        this.client = new openai_namespaceObject.ChatOpenAI({
            model: 'gpt-4o-mini',
            apiKey: this.configService.get('openai_api_key'),
            temperature: 0
        });
    }
    var _proto = LLMClient.prototype;
    _proto.getClient = function getClient(tools) {
        if (tools === void 0) tools = null;
        if (!tools) return this.client;
        return this.client.bindTools(tools);
    };
    return LLMClient;
}();
llm_service_LLMClient = common_llm_service_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    common_llm_service_ts_metadata("design:type", Function),
    common_llm_service_ts_metadata("design:paramtypes", [
        typeof config_namespaceObject.ConfigService === "undefined" ? Object : config_namespaceObject.ConfigService
    ])
], llm_service_LLMClient);

;// ../../libs/ng-pr-review-agent/src/lib/agent/tools/tool.registry.ts
function tools_tool_registry_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var tool_registry_ToolRegistry = /*#__PURE__*/ function() {
    "use strict";
    function ToolRegistry() {}
    var _proto = ToolRegistry.prototype;
    _proto.getTools = function getTools() {
        return [];
    };
    return ToolRegistry;
}();
tool_registry_ToolRegistry = tools_tool_registry_ts_decorate([
    (0,common_namespaceObject.Injectable)()
], tool_registry_ToolRegistry);

;// ../../libs/ng-pr-review-agent/src/lib/agent/nodes/llm.node.ts
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
}
function nodes_llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function nodes_llm_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                nodes_llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                nodes_llm_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function nodes_llm_node_extends() {
    nodes_llm_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return nodes_llm_node_extends.apply(this, arguments);
}
function nodes_llm_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function nodes_llm_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function nodes_llm_node_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}







var llm_node_LLMNode = /*#__PURE__*/ function() {
    "use strict";
    function LLMNode(llMClient, toolRegistry) {
        var _this = this;
        this.llMClient = llMClient;
        this.toolRegistry = toolRegistry;
        this.systemPrompt = function() {
            var prompts = [
                'review.md',
                'output.md'
            ];
            return prompts.map(function(prompt) {
                return _this.loadPrompt(prompt);
            }).join('\n');
        };
        this.execute = function(state) {
            return nodes_llm_node_async_to_generator(function() {
                var _state_files, systemPrompt, comments, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _this, _loop, _iterator, _step, err;
                return nodes_llm_node_ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            systemPrompt = this.systemPrompt();
                            comments = [];
                            if (!((_state_files = state.files) == null ? void 0 : _state_files.length)) {
                                return [
                                    2,
                                    state
                                ];
                            }
                            _iteratorAbruptCompletion = false, _didIteratorError = false;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                7,
                                8,
                                13
                            ]);
                            _loop = function() {
                                var _value, file, _oldCommentOfTheFile_map, oldCommentOfTheFile, existingComments, existingLines, prompt, response, llmComments, filteredComments;
                                return nodes_llm_node_ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _value = _step.value;
                                            file = _value;
                                            if (!file.patch) return [
                                                2,
                                                "continue"
                                            ];
                                            oldCommentOfTheFile = state.oldComments.filter(function(comment) {
                                                return comment.path === file.filename;
                                            });
                                            existingComments = (_oldCommentOfTheFile_map = oldCommentOfTheFile.map(function(comment) {
                                                return {
                                                    path: comment.path,
                                                    line: comment.line
                                                };
                                            })) != null ? _oldCommentOfTheFile_map : [];
                                            existingLines = new Set(oldCommentOfTheFile.map(function(comment) {
                                                return comment.path + ":" + comment.line;
                                            }));
                                            prompt = "\n        You are reviewing a GitHub pull request.\n\n        File: " + file.filename + "\n\n        Changed code:\n        " + file.patch + "\n\n        Existing comments already posted on this file and at line number:\n        " + JSON.stringify(existingComments, null, 2) + "\n\n        STRICT RULES:\n          1. Review ONLY changed lines\n          2. Only skip findings if the SAME line already has a comment\n          3. Ignore comments on other lines\n          4. If a line has no existing comment, review it normally\n          5. Return all valid new findings\n          6. Return [] only if every issue is already commented\n        ";
                                            return [
                                                4,
                                                _this.client.invoke([
                                                    new messages_namespaceObject.SystemMessage(systemPrompt),
                                                    new messages_namespaceObject.HumanMessage(prompt)
                                                ])
                                            ];
                                        case 1:
                                            response = _state.sent();
                                            llmComments = ReviewCommentSchema.parse(JSON.parse(response.content));
                                            filteredComments = llmComments.filter(function(comment) {
                                                return !existingLines.has(comment.path + ":" + comment.line);
                                            });
                                            comments = filteredComments.map(function(comment) {
                                                return nodes_llm_node_extends({}, comment, {
                                                    path: file.filename
                                                });
                                            }).concat(comments);
                                            return [
                                                2
                                            ];
                                    }
                                });
                            };
                            _iterator = _async_iterator(state.files);
                            _state.label = 2;
                        case 2:
                            return [
                                4,
                                _iterator.next()
                            ];
                        case 3:
                            if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                                3,
                                6
                            ];
                            _this = this;
                            return [
                                5,
                                _ts_values(_loop())
                            ];
                        case 4:
                            _state.sent();
                            _state.label = 5;
                        case 5:
                            _iteratorAbruptCompletion = false;
                            return [
                                3,
                                2
                            ];
                        case 6:
                            return [
                                3,
                                13
                            ];
                        case 7:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                13
                            ];
                        case 8:
                            _state.trys.push([
                                8,
                                ,
                                11,
                                12
                            ]);
                            if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                                3,
                                10
                            ];
                            return [
                                4,
                                _iterator.return()
                            ];
                        case 9:
                            _state.sent();
                            _state.label = 10;
                        case 10:
                            return [
                                3,
                                12
                            ];
                        case 11:
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                            return [
                                7
                            ];
                        case 12:
                            return [
                                7
                            ];
                        case 13:
                            return [
                                2,
                                nodes_llm_node_extends({}, state, {
                                    newComments: comments
                                })
                            ];
                    }
                });
            }).call(_this);
        };
        this.client = this.llMClient.getClient(this.toolRegistry.getTools());
    }
    var _proto = LLMNode.prototype;
    _proto.loadPrompt = function loadPrompt(file) {
        var fullPath = (0,external_path_namespaceObject.join)(process.cwd(), 'libs/ng-pr-review-agent/src/lib/agent/prompts', file);
        return (0,external_fs_namespaceObject.readFileSync)(fullPath, 'utf8');
    };
    return LLMNode;
}();
llm_node_LLMNode = nodes_llm_node_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    nodes_llm_node_ts_metadata("design:type", Function),
    nodes_llm_node_ts_metadata("design:paramtypes", [
        typeof llm_service_LLMClient === "undefined" ? Object : llm_service_LLMClient,
        typeof tool_registry_ToolRegistry === "undefined" ? Object : tool_registry_ToolRegistry
    ])
], llm_node_LLMNode);

;// external "@actions/github"
const github_namespaceObject = require("@actions/github");
;// ../../libs/ng-pr-review-agent/src/lib/common/env.config.ts
Object.defineProperty(common_env_config, "name", { value: "default", configurable: true });
function env_config_extends() {
    env_config_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return env_config_extends.apply(this, arguments);
}
var _process_env_GITHUB_ACTION_PATH;
var env_config_env = {
    openai_api_key: process.env['OPENAI_API_KEY'] || function() {
        throw new Error("OPENAI_API_KEY is not defined");
    }(),
    github_token: process.env['GITHUB_TOKEN'] || function() {
        throw new Error("GITHUB_TOKEN is not defined");
    }(),
    github_action_path: (_process_env_GITHUB_ACTION_PATH = process.env['GITHUB_ACTION_PATH']) != null ? _process_env_GITHUB_ACTION_PATH : ''
};
/* harmony default export */ function common_env_config() {
    return env_config_extends({}, env_config_env);
};

;// ../../libs/ng-pr-review-agent/src/lib/common/github-client.ts


var githubClient = github_namespaceObject.getOctokit(env_config_env.github_token);

;// ../../libs/ng-pr-review-agent/src/lib/agent/nodes/github.node.ts
function github_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function github_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                github_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                github_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function github_node_extends() {
    github_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return github_node_extends.apply(this, arguments);
}
function github_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function github_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var GitHubNode = function GitHubNode() {
    "use strict";
    var _this = this;
    this.getPullRequestFiles = function(owner, repo, pullNumber) {
        return github_node_async_to_generator(function() {
            var data;
            return github_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            githubClient.rest.pulls.listFiles({
                                owner: owner,
                                repo: repo,
                                pull_number: pullNumber
                            })
                        ];
                    case 1:
                        data = _state.sent().data;
                        return [
                            2,
                            data
                        ];
                }
            });
        })();
    };
    this.getCommitSha = function(owner, repo, pullNumber) {
        return github_node_async_to_generator(function() {
            var pr;
            return github_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            githubClient.rest.pulls.get({
                                owner: owner,
                                repo: repo,
                                pull_number: pullNumber
                            })
                        ];
                    case 1:
                        pr = _state.sent();
                        return [
                            2,
                            pr.data.head.sha
                        ];
                }
            });
        })();
    };
    this.listReviewComments = function(owner, repo, pullNumber) {
        return github_node_async_to_generator(function() {
            var data;
            return github_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            githubClient.rest.pulls.listReviewComments({
                                owner: owner,
                                repo: repo,
                                pull_number: pullNumber
                            })
                        ];
                    case 1:
                        data = _state.sent().data;
                        return [
                            2,
                            data
                        ];
                }
            });
        })();
    };
    this.execute = function(state) {
        return github_node_async_to_generator(function() {
            var _ref, _ref1, _ref2, context, PR, owner, repo, pullNumber, files, commitId, comments;
            return github_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        context = github_namespaceObject.context;
                        PR = context.payload.pull_request;
                        owner = (_ref = context == null ? void 0 : context.repo.owner) != null ? _ref : 'shahurkhkhan';
                        repo = (_ref1 = context == null ? void 0 : context.repo.repo) != null ? _ref1 : 's3bangles-manager';
                        pullNumber = (_ref2 = PR == null ? void 0 : PR.number) != null ? _ref2 : 21;
                        return [
                            4,
                            this.getPullRequestFiles(owner, repo, pullNumber)
                        ];
                    case 1:
                        files = _state.sent();
                        return [
                            4,
                            this.getCommitSha(owner, repo, pullNumber)
                        ];
                    case 2:
                        commitId = _state.sent();
                        return [
                            4,
                            this.listReviewComments(owner, repo, pullNumber)
                        ];
                    case 3:
                        comments = _state.sent();
                        return [
                            2,
                            github_node_extends({}, state, {
                                owner: owner,
                                repo: repo,
                                pullNumber: pullNumber,
                                files: files.filter(function(file) {
                                    return file.filename !== 'apps/s3-manager/src/styles.scss';
                                }),
                                commitId: commitId,
                                oldComments: comments
                            })
                        ];
                }
            });
        }).call(_this);
    };
};
GitHubNode = github_node_ts_decorate([
    (0,common_namespaceObject.Injectable)()
], GitHubNode);

;// ../../libs/ng-pr-review-agent/src/lib/agent/nodes/post-comment.node.ts
function post_comment_node_array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function post_comment_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function post_comment_node_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                post_comment_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                post_comment_node_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function post_comment_node_extends() {
    post_comment_node_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return post_comment_node_extends.apply(this, arguments);
}
function post_comment_node_unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return post_comment_node_array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return post_comment_node_array_like_to_array(o, minLen);
}
function post_comment_node_create_for_of_iterator_helper_loose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = post_comment_node_unsupported_iterable_to_array(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) {
                return {
                    done: true
                };
            }
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function post_comment_node_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function post_comment_node_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


var PostCommentNode = function PostCommentNode() {
    "use strict";
    var _this = this;
    this.getSeverityMeta = function(severity) {
        switch(severity == null ? void 0 : severity.toLowerCase()){
            case "high":
                return {
                    emoji: "🚨",
                    label: "High"
                };
            case "medium":
                return {
                    emoji: "⚠️",
                    label: "Medium"
                };
            default:
                return {
                    emoji: "ℹ️",
                    label: "Low"
                };
        }
    };
    this.capitalize = function(value) {
        if (!value) return "General";
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    this.formatConfidence = function(confidence) {
        if (typeof confidence !== "number") {
            return "N/A";
        }
        return "" + Math.round(confidence * 100) + "%";
    };
    this.sanitizeCodeBlock = function(text) {
        if (!text) return "No suggestion provided.";
        return text.replace(/```/g, "");
    };
    this.formatInlineComment = function(comment) {
        // This is a simple formatter that creates a markdown comment body based on the review comment details. You can customize this to include more information or format it differently based on the category or severity.
        var meta = _this.getSeverityMeta(comment.severity);
        // For example, you might want to include the category, confidence score, and a formatted suggestion. The exact format can be adjusted based on your needs and the information provided by the AI.  
        var category = _this.capitalize(comment.category);
        // Format confidence as a percentage if available
        var confidence = _this.formatConfidence(comment.confidence);
        // Sanitize the suggestion to ensure it doesn't break the markdown formatting
        var suggestion = _this.sanitizeCodeBlock(comment.suggestion);
        return ("\n    ## " + meta.emoji + " " + category + " Finding\n\n**Severity:** " + meta.label + "  \n**Category:** " + category + "  \n**Confidence:** " + confidence + "\n\n### Why this matters\n" + comment.message + "\n\n### Recommended Fix\n```ts\n" + suggestion + "\n```").trim();
    };
    this.postInlineComment = function(params) {
        return post_comment_node_async_to_generator(function() {
            return post_comment_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        //   if (config.dryRun) {
                        //     console.log(params);
                        //     return;
                        //   }
                        console.log('owner', {
                            owner: params.owner,
                            repo: params.repo,
                            pull_number: params.pullNumber
                        });
                        return [
                            4,
                            githubClient.rest.pulls.createReviewComment({
                                owner: params.owner,
                                repo: params.repo,
                                pull_number: params.pullNumber,
                                commit_id: params.commitId,
                                path: params.path,
                                line: params.line,
                                body: params.body
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    };
    this.postSummaryComment = function(params) {
        return post_comment_node_async_to_generator(function() {
            return post_comment_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            githubClient.rest.issues.createComment({
                                owner: params.owner,
                                repo: params.repo,
                                issue_number: params.pullNumber,
                                body: params.body
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    };
    this.buildSummary = function(comments) {
        var high = comments.filter(function(x) {
            return x.severity === "Critical";
        }).length;
        var medium = comments.filter(function(x) {
            return x.severity === "Major";
        }).length;
        var low = comments.filter(function(x) {
            return x.severity === "Minor";
        }).length;
        return "\n# \uD83E\uDD16 Review Summary\n\nReviewed changed files for:\n\n- Bugs\n- Security\n- Performance\n- Maintainability\n\n## Findings\n\n| Severity | Count      |\n|----------|------------|\n| Critical | " + high + "    |\n| Major    | " + medium + "  |\n| Minor    | " + low + "     |\n\nPlease review inline comments before merge.\n    ";
    };
    this.execute = function(state) {
        return post_comment_node_async_to_generator(function() {
            var comments, _iterator, _step, comment, body;
            return post_comment_node_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        comments = state.newComments;
                        if (!comments || !comments.length) {
                            return [
                                2,
                                state
                            ];
                        }
                        _iterator = post_comment_node_create_for_of_iterator_helper_loose(comments);
                        _state.label = 1;
                    case 1:
                        if (!!(_step = _iterator()).done) return [
                            3,
                            4
                        ];
                        comment = _step.value;
                        body = this.formatInlineComment(comment);
                        return [
                            4,
                            this.postInlineComment({
                                owner: state.owner,
                                repo: state.repo,
                                pullNumber: state.pullNumber,
                                commitId: state.commitId,
                                path: comment.path,
                                line: comment.line,
                                body: body
                            })
                        ];
                    case 2:
                        _state.sent();
                        _state.label = 3;
                    case 3:
                        return [
                            3,
                            1
                        ];
                    case 4:
                        // After posting inline comments, post a summary comment with all findings
                        // await this.postSummaryComment({
                        //     owner: state.owner,
                        //     repo: state.repo,
                        //     pullNumber: state.pullNumber,
                        //     body: this.buildSummary(comments),
                        // });
                        return [
                            2,
                            post_comment_node_extends({}, state)
                        ];
                }
            });
        }).call(_this);
    };
};
PostCommentNode = post_comment_node_ts_decorate([
    (0,common_namespaceObject.Injectable)()
], PostCommentNode);

;// ../../libs/ng-pr-review-agent/src/lib/agent/graph.ts
function agent_graph_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function agent_graph_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}






var graph_ChatGraph = /*#__PURE__*/ function() {
    "use strict";
    function ChatGraph(llmNode, githubNode, postCommentNode) {
        this.llmNode = llmNode;
        this.githubNode = githubNode;
        this.postCommentNode = postCommentNode;
    }
    var _proto = ChatGraph.prototype;
    _proto.build = function build() {
        return new langgraph_namespaceObject.StateGraph(state_AgentState).addNode('PRDetail', this.githubNode.execute).addNode('llmNode', this.llmNode.execute).addNode('postComments', this.postCommentNode.execute).addEdge(langgraph_namespaceObject.START, 'PRDetail').addEdge('PRDetail', 'llmNode').addEdge('llmNode', 'postComments').addEdge('postComments', langgraph_namespaceObject.END).compile();
    };
    return ChatGraph;
}();
graph_ChatGraph = agent_graph_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    agent_graph_ts_metadata("design:type", Function),
    agent_graph_ts_metadata("design:paramtypes", [
        typeof llm_node_LLMNode === "undefined" ? Object : llm_node_LLMNode,
        typeof GitHubNode === "undefined" ? Object : GitHubNode,
        typeof PostCommentNode === "undefined" ? Object : PostCommentNode
    ])
], graph_ChatGraph);

;// ../../libs/ng-pr-review-agent/src/lib/agent/agent.ts
function agent_agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function agent_agent_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                agent_agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                agent_agent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function agent_agent_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function agent_agent_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function agent_agent_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}


var agent_AgentRuntimeService = /*#__PURE__*/ function() {
    "use strict";
    function AgentRuntimeService(chatGraph) {
        this.chatGraph = chatGraph;
        this.graph = this.chatGraph.build();
    }
    var _proto = AgentRuntimeService.prototype;
    _proto.invoke = function invoke() {
        return agent_agent_async_to_generator(function() {
            var result;
            return agent_agent_ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            this.graph.invoke({
                                files: [],
                                newComments: [],
                                oldComments: []
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                }
            });
        }).call(this);
    };
    return AgentRuntimeService;
}();
agent_AgentRuntimeService = agent_agent_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    agent_agent_ts_metadata("design:type", Function),
    agent_agent_ts_metadata("design:paramtypes", [
        typeof graph_ChatGraph === "undefined" ? Object : graph_ChatGraph
    ])
], agent_AgentRuntimeService);

;// ../../libs/ng-pr-review-agent/src/lib/pr-review.controller.ts
function pr_review_controller_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function pr_review_controller_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}


var PRReviewController = /*#__PURE__*/ function() {
    "use strict";
    function PRReviewController(runtime) {
        this.runtime = runtime;
    }
    var _proto = PRReviewController.prototype;
    _proto.todoAgent = function todoAgent() {
        return this.runtime.invoke();
    };
    return PRReviewController;
}();
pr_review_controller_ts_decorate([
    (0,common_namespaceObject.Get)(),
    pr_review_controller_ts_metadata("design:type", Function),
    pr_review_controller_ts_metadata("design:paramtypes", []),
    pr_review_controller_ts_metadata("design:returntype", void 0)
], PRReviewController.prototype, "todoAgent", null);
PRReviewController = pr_review_controller_ts_decorate([
    (0,common_namespaceObject.Controller)('pr'),
    pr_review_controller_ts_metadata("design:type", Function),
    pr_review_controller_ts_metadata("design:paramtypes", [
        typeof agent_AgentRuntimeService === "undefined" ? Object : agent_AgentRuntimeService
    ])
], PRReviewController);

;// ../../libs/ng-pr-review-agent/src/lib/common/env.validation.ts

var env_validation_envValidationSchema = external_joi_namespaceObject.object({
    OPENAI_API_KEY: external_joi_namespaceObject.string().required()
});

;// ../../libs/ng-pr-review-agent/src/lib/agent/agent.module.ts
function agent_agent_module_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}








var agent_module_AgentModule = function AgentModule() {
    "use strict";
};
agent_module_AgentModule = agent_agent_module_ts_decorate([
    (0,common_namespaceObject.Module)({
        imports: [],
        providers: [
            // Common
            llm_service_LLMClient,
            // Nodes
            llm_node_LLMNode,
            GitHubNode,
            PostCommentNode,
            // Tools
            tool_registry_ToolRegistry,
            // Graph
            graph_ChatGraph,
            // Agent
            agent_AgentRuntimeService
        ],
        exports: [
            agent_AgentRuntimeService
        ]
    })
], agent_module_AgentModule);

;// ../../libs/ng-pr-review-agent/src/lib/pr-review.service.ts
function pr_review_service_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function pr_review_service_ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}


var PRReviewService = /*#__PURE__*/ function() {
    "use strict";
    function PRReviewService(runtime) {
        this.runtime = runtime;
    }
    var _proto = PRReviewService.prototype;
    _proto.invoke = function invoke() {
        return this.runtime.invoke();
    };
    return PRReviewService;
}();
PRReviewService = pr_review_service_ts_decorate([
    (0,common_namespaceObject.Injectable)(),
    pr_review_service_ts_metadata("design:type", Function),
    pr_review_service_ts_metadata("design:paramtypes", [
        typeof agent_AgentRuntimeService === "undefined" ? Object : agent_AgentRuntimeService
    ])
], PRReviewService);

;// ../../libs/ng-pr-review-agent/src/lib/ng-pr-review-agent.module.ts
function ng_pr_review_agent_module_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







var NgPrReviewAgentModule = function NgPrReviewAgentModule() {
    "use strict";
};
NgPrReviewAgentModule = ng_pr_review_agent_module_ts_decorate([
    (0,common_namespaceObject.Module)({
        imports: [
            config_namespaceObject.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [
                    common_env_config
                ],
                validationSchema: env_validation_envValidationSchema
            }),
            agent_module_AgentModule
        ],
        controllers: [
            PRReviewController
        ],
        providers: [
            PRReviewService
        ],
        exports: [
            PRReviewService
        ]
    })
], NgPrReviewAgentModule);

;// ../../libs/ng-pr-review-agent/src/index.ts



;// ./src/app/app.module.ts
function app_module_ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}





var AppModule = function AppModule() {
    "use strict";
};
AppModule = app_module_ts_decorate([
    (0,common_namespaceObject.Module)({
        imports: [
            TodoAgentModule,
            NgPrReviewAgentModule // PR Review Agent
        ],
        controllers: [
            AppController
        ],
        providers: [
            AppService
        ]
    })
], AppModule);

;// ./src/main.ts
function main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function main_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                main_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function main_ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */ 


function bootstrap() {
    return main_async_to_generator(function() {
        var app, globalPrefix, port;
        return main_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        core_namespaceObject.NestFactory.create(AppModule)
                    ];
                case 1:
                    app = _state.sent();
                    globalPrefix = 'api';
                    app.setGlobalPrefix(globalPrefix);
                    port = process.env.PORT || 3000;
                    return [
                        4,
                        app.listen(port)
                    ];
                case 2:
                    _state.sent();
                    common_namespaceObject.Logger.log("\uD83D\uDE80 Application is running on: http://localhost:" + port + "/" + globalPrefix);
                    return [
                        2
                    ];
            }
        });
    })();
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map