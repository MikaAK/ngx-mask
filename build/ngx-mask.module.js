var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaskDirective } from "./mask.directive";
import { NEW_CONFIG, INITIAL_CONFIG, config, initialConfig } from "./config";
var NgxMaskModule = (function () {
    function NgxMaskModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                { provide: NEW_CONFIG, useValue: configValue },
                { provide: INITIAL_CONFIG, useValue: initialConfig },
                { provide: config, useFactory: _configFactory, deps: [INITIAL_CONFIG, NEW_CONFIG] },
            ]
        };
    };
    NgxMaskModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [MaskDirective],
                    declarations: [MaskDirective]
                },] },
    ];
    /** @nocollapse */
    NgxMaskModule.ctorParameters = function () { return []; };
    return NgxMaskModule;
}());
export { NgxMaskModule };
function NgxMaskModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxMaskModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxMaskModule.ctorParameters;
}
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
export function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}