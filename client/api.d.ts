/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/accounts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getAccountById"];
        put: operations["updateAccount"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/accounts/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["bulkUpdate"];
        post: operations["bulkCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["registerUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["loginUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getAllAccounts"];
        put?: never;
        post: operations["createAccount"];
        delete: operations["bulkDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/login-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getCurrentUserLoginHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/login-history/login-patterns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getSuspiciousLogins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getCurrentUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/accounts/weak-passwords": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getWeakPasswords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/accounts/reused-passwords": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getReusedPasswords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        PasswordAccountDTO: {
            /** Format: uuid */
            readonly id?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            title: string;
            username: string;
            password: string;
            /** @enum {string} */
            strength?: "WEAK" | "MEDIUM" | "STRONG";
            url?: string;
            notes?: string;
            icon?: string;
            color?: string;
            readonly security?: components["schemas"]["PasswordSecurityDTO"];
            readonly passwordHistories?: components["schemas"]["PasswordHistoryDTO"][];
        };
        PasswordHistoryDTO: {
            /** Format: uuid */
            readonly id?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: date-time */
            changeDate?: string;
            password?: string;
        };
        PasswordSecurityDTO: {
            /** @enum {string} */
            strength?: "WEAK" | "MEDIUM" | "STRONG";
            complexity?: string;
            reused?: boolean;
            /** Format: int64 */
            passwordAge?: number;
        };
        ApiResponsePasswordAccountDTO: {
            success?: boolean;
            message?: string;
            /** @enum {string} */
            status?: "100 CONTINUE" | "101 SWITCHING_PROTOCOLS" | "102 PROCESSING" | "103 EARLY_HINTS" | "103 CHECKPOINT" | "200 OK" | "201 CREATED" | "202 ACCEPTED" | "203 NON_AUTHORITATIVE_INFORMATION" | "204 NO_CONTENT" | "205 RESET_CONTENT" | "206 PARTIAL_CONTENT" | "207 MULTI_STATUS" | "208 ALREADY_REPORTED" | "226 IM_USED" | "300 MULTIPLE_CHOICES" | "301 MOVED_PERMANENTLY" | "302 FOUND" | "302 MOVED_TEMPORARILY" | "303 SEE_OTHER" | "304 NOT_MODIFIED" | "305 USE_PROXY" | "307 TEMPORARY_REDIRECT" | "308 PERMANENT_REDIRECT" | "400 BAD_REQUEST" | "401 UNAUTHORIZED" | "402 PAYMENT_REQUIRED" | "403 FORBIDDEN" | "404 NOT_FOUND" | "405 METHOD_NOT_ALLOWED" | "406 NOT_ACCEPTABLE" | "407 PROXY_AUTHENTICATION_REQUIRED" | "408 REQUEST_TIMEOUT" | "409 CONFLICT" | "410 GONE" | "411 LENGTH_REQUIRED" | "412 PRECONDITION_FAILED" | "413 PAYLOAD_TOO_LARGE" | "413 REQUEST_ENTITY_TOO_LARGE" | "414 URI_TOO_LONG" | "414 REQUEST_URI_TOO_LONG" | "415 UNSUPPORTED_MEDIA_TYPE" | "416 REQUESTED_RANGE_NOT_SATISFIABLE" | "417 EXPECTATION_FAILED" | "418 I_AM_A_TEAPOT" | "419 INSUFFICIENT_SPACE_ON_RESOURCE" | "420 METHOD_FAILURE" | "421 DESTINATION_LOCKED" | "422 UNPROCESSABLE_ENTITY" | "423 LOCKED" | "424 FAILED_DEPENDENCY" | "425 TOO_EARLY" | "426 UPGRADE_REQUIRED" | "428 PRECONDITION_REQUIRED" | "429 TOO_MANY_REQUESTS" | "431 REQUEST_HEADER_FIELDS_TOO_LARGE" | "451 UNAVAILABLE_FOR_LEGAL_REASONS" | "500 INTERNAL_SERVER_ERROR" | "501 NOT_IMPLEMENTED" | "502 BAD_GATEWAY" | "503 SERVICE_UNAVAILABLE" | "504 GATEWAY_TIMEOUT" | "505 HTTP_VERSION_NOT_SUPPORTED" | "506 VARIANT_ALSO_NEGOTIATES" | "507 INSUFFICIENT_STORAGE" | "508 LOOP_DETECTED" | "509 BANDWIDTH_LIMIT_EXCEEDED" | "510 NOT_EXTENDED" | "511 NETWORK_AUTHENTICATION_REQUIRED";
            /** Format: date-time */
            timestamp?: string;
            data?: components["schemas"]["PasswordAccountDTO"];
        };
        UserDTO: {
            /** Format: uuid */
            readonly id?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            username: string;
            profilePicture?: string;
            password: string;
            email: string;
            ipAddress: string;
            userAgent: string;
            deviceName: string;
            deviceType: string;
            osName: string;
            osVersion: string;
            browserName: string;
            browserVersion: string;
            location: string;
            readonly enabled?: boolean;
            readonly accountNonExpired?: boolean;
            readonly accountNonLocked?: boolean;
            readonly credentialsNonExpired?: boolean;
        };
        ApiResponseObject: {
            success?: boolean;
            message?: string;
            /** @enum {string} */
            status?: "100 CONTINUE" | "101 SWITCHING_PROTOCOLS" | "102 PROCESSING" | "103 EARLY_HINTS" | "103 CHECKPOINT" | "200 OK" | "201 CREATED" | "202 ACCEPTED" | "203 NON_AUTHORITATIVE_INFORMATION" | "204 NO_CONTENT" | "205 RESET_CONTENT" | "206 PARTIAL_CONTENT" | "207 MULTI_STATUS" | "208 ALREADY_REPORTED" | "226 IM_USED" | "300 MULTIPLE_CHOICES" | "301 MOVED_PERMANENTLY" | "302 FOUND" | "302 MOVED_TEMPORARILY" | "303 SEE_OTHER" | "304 NOT_MODIFIED" | "305 USE_PROXY" | "307 TEMPORARY_REDIRECT" | "308 PERMANENT_REDIRECT" | "400 BAD_REQUEST" | "401 UNAUTHORIZED" | "402 PAYMENT_REQUIRED" | "403 FORBIDDEN" | "404 NOT_FOUND" | "405 METHOD_NOT_ALLOWED" | "406 NOT_ACCEPTABLE" | "407 PROXY_AUTHENTICATION_REQUIRED" | "408 REQUEST_TIMEOUT" | "409 CONFLICT" | "410 GONE" | "411 LENGTH_REQUIRED" | "412 PRECONDITION_FAILED" | "413 PAYLOAD_TOO_LARGE" | "413 REQUEST_ENTITY_TOO_LARGE" | "414 URI_TOO_LONG" | "414 REQUEST_URI_TOO_LONG" | "415 UNSUPPORTED_MEDIA_TYPE" | "416 REQUESTED_RANGE_NOT_SATISFIABLE" | "417 EXPECTATION_FAILED" | "418 I_AM_A_TEAPOT" | "419 INSUFFICIENT_SPACE_ON_RESOURCE" | "420 METHOD_FAILURE" | "421 DESTINATION_LOCKED" | "422 UNPROCESSABLE_ENTITY" | "423 LOCKED" | "424 FAILED_DEPENDENCY" | "425 TOO_EARLY" | "426 UPGRADE_REQUIRED" | "428 PRECONDITION_REQUIRED" | "429 TOO_MANY_REQUESTS" | "431 REQUEST_HEADER_FIELDS_TOO_LARGE" | "451 UNAVAILABLE_FOR_LEGAL_REASONS" | "500 INTERNAL_SERVER_ERROR" | "501 NOT_IMPLEMENTED" | "502 BAD_GATEWAY" | "503 SERVICE_UNAVAILABLE" | "504 GATEWAY_TIMEOUT" | "505 HTTP_VERSION_NOT_SUPPORTED" | "506 VARIANT_ALSO_NEGOTIATES" | "507 INSUFFICIENT_STORAGE" | "508 LOOP_DETECTED" | "509 BANDWIDTH_LIMIT_EXCEEDED" | "510 NOT_EXTENDED" | "511 NETWORK_AUTHENTICATION_REQUIRED";
            /** Format: date-time */
            timestamp?: string;
            data?: Record<string, never>;
        };
        ApiResponseListLoginHistoryDTO: {
            success?: boolean;
            message?: string;
            /** @enum {string} */
            status?: "100 CONTINUE" | "101 SWITCHING_PROTOCOLS" | "102 PROCESSING" | "103 EARLY_HINTS" | "103 CHECKPOINT" | "200 OK" | "201 CREATED" | "202 ACCEPTED" | "203 NON_AUTHORITATIVE_INFORMATION" | "204 NO_CONTENT" | "205 RESET_CONTENT" | "206 PARTIAL_CONTENT" | "207 MULTI_STATUS" | "208 ALREADY_REPORTED" | "226 IM_USED" | "300 MULTIPLE_CHOICES" | "301 MOVED_PERMANENTLY" | "302 FOUND" | "302 MOVED_TEMPORARILY" | "303 SEE_OTHER" | "304 NOT_MODIFIED" | "305 USE_PROXY" | "307 TEMPORARY_REDIRECT" | "308 PERMANENT_REDIRECT" | "400 BAD_REQUEST" | "401 UNAUTHORIZED" | "402 PAYMENT_REQUIRED" | "403 FORBIDDEN" | "404 NOT_FOUND" | "405 METHOD_NOT_ALLOWED" | "406 NOT_ACCEPTABLE" | "407 PROXY_AUTHENTICATION_REQUIRED" | "408 REQUEST_TIMEOUT" | "409 CONFLICT" | "410 GONE" | "411 LENGTH_REQUIRED" | "412 PRECONDITION_FAILED" | "413 PAYLOAD_TOO_LARGE" | "413 REQUEST_ENTITY_TOO_LARGE" | "414 URI_TOO_LONG" | "414 REQUEST_URI_TOO_LONG" | "415 UNSUPPORTED_MEDIA_TYPE" | "416 REQUESTED_RANGE_NOT_SATISFIABLE" | "417 EXPECTATION_FAILED" | "418 I_AM_A_TEAPOT" | "419 INSUFFICIENT_SPACE_ON_RESOURCE" | "420 METHOD_FAILURE" | "421 DESTINATION_LOCKED" | "422 UNPROCESSABLE_ENTITY" | "423 LOCKED" | "424 FAILED_DEPENDENCY" | "425 TOO_EARLY" | "426 UPGRADE_REQUIRED" | "428 PRECONDITION_REQUIRED" | "429 TOO_MANY_REQUESTS" | "431 REQUEST_HEADER_FIELDS_TOO_LARGE" | "451 UNAVAILABLE_FOR_LEGAL_REASONS" | "500 INTERNAL_SERVER_ERROR" | "501 NOT_IMPLEMENTED" | "502 BAD_GATEWAY" | "503 SERVICE_UNAVAILABLE" | "504 GATEWAY_TIMEOUT" | "505 HTTP_VERSION_NOT_SUPPORTED" | "506 VARIANT_ALSO_NEGOTIATES" | "507 INSUFFICIENT_STORAGE" | "508 LOOP_DETECTED" | "509 BANDWIDTH_LIMIT_EXCEEDED" | "510 NOT_EXTENDED" | "511 NETWORK_AUTHENTICATION_REQUIRED";
            /** Format: date-time */
            timestamp?: string;
            data?: components["schemas"]["LoginHistoryDTO"][];
        };
        LoginHistoryDTO: {
            /** Format: uuid */
            readonly id?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            /** Format: uuid */
            userId?: string;
            ipAddress?: string;
            userAgent?: string;
            deviceType?: string;
            deviceName?: string;
            osName?: string;
            osVersion?: string;
            browserName?: string;
            browserVersion?: string;
            location?: string;
        };
        ApiResponseUserDTO: {
            success?: boolean;
            message?: string;
            /** @enum {string} */
            status?: "100 CONTINUE" | "101 SWITCHING_PROTOCOLS" | "102 PROCESSING" | "103 EARLY_HINTS" | "103 CHECKPOINT" | "200 OK" | "201 CREATED" | "202 ACCEPTED" | "203 NON_AUTHORITATIVE_INFORMATION" | "204 NO_CONTENT" | "205 RESET_CONTENT" | "206 PARTIAL_CONTENT" | "207 MULTI_STATUS" | "208 ALREADY_REPORTED" | "226 IM_USED" | "300 MULTIPLE_CHOICES" | "301 MOVED_PERMANENTLY" | "302 FOUND" | "302 MOVED_TEMPORARILY" | "303 SEE_OTHER" | "304 NOT_MODIFIED" | "305 USE_PROXY" | "307 TEMPORARY_REDIRECT" | "308 PERMANENT_REDIRECT" | "400 BAD_REQUEST" | "401 UNAUTHORIZED" | "402 PAYMENT_REQUIRED" | "403 FORBIDDEN" | "404 NOT_FOUND" | "405 METHOD_NOT_ALLOWED" | "406 NOT_ACCEPTABLE" | "407 PROXY_AUTHENTICATION_REQUIRED" | "408 REQUEST_TIMEOUT" | "409 CONFLICT" | "410 GONE" | "411 LENGTH_REQUIRED" | "412 PRECONDITION_FAILED" | "413 PAYLOAD_TOO_LARGE" | "413 REQUEST_ENTITY_TOO_LARGE" | "414 URI_TOO_LONG" | "414 REQUEST_URI_TOO_LONG" | "415 UNSUPPORTED_MEDIA_TYPE" | "416 REQUESTED_RANGE_NOT_SATISFIABLE" | "417 EXPECTATION_FAILED" | "418 I_AM_A_TEAPOT" | "419 INSUFFICIENT_SPACE_ON_RESOURCE" | "420 METHOD_FAILURE" | "421 DESTINATION_LOCKED" | "422 UNPROCESSABLE_ENTITY" | "423 LOCKED" | "424 FAILED_DEPENDENCY" | "425 TOO_EARLY" | "426 UPGRADE_REQUIRED" | "428 PRECONDITION_REQUIRED" | "429 TOO_MANY_REQUESTS" | "431 REQUEST_HEADER_FIELDS_TOO_LARGE" | "451 UNAVAILABLE_FOR_LEGAL_REASONS" | "500 INTERNAL_SERVER_ERROR" | "501 NOT_IMPLEMENTED" | "502 BAD_GATEWAY" | "503 SERVICE_UNAVAILABLE" | "504 GATEWAY_TIMEOUT" | "505 HTTP_VERSION_NOT_SUPPORTED" | "506 VARIANT_ALSO_NEGOTIATES" | "507 INSUFFICIENT_STORAGE" | "508 LOOP_DETECTED" | "509 BANDWIDTH_LIMIT_EXCEEDED" | "510 NOT_EXTENDED" | "511 NETWORK_AUTHENTICATION_REQUIRED";
            /** Format: date-time */
            timestamp?: string;
            data?: components["schemas"]["UserDTO"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getAccountById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponsePasswordAccountDTO"];
                };
            };
        };
    };
    updateAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PasswordAccountDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponsePasswordAccountDTO"];
                };
            };
        };
    };
    bulkUpdate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PasswordAccountDTO"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": Record<string, never>;
                };
            };
        };
    };
    bulkCreate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PasswordAccountDTO"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": Record<string, never>;
                };
            };
        };
    };
    registerUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseObject"];
                };
            };
        };
    };
    loginUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": Record<string, never>;
                };
            };
        };
    };
    getAllAccounts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": Record<string, never>;
                };
            };
        };
    };
    createAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PasswordAccountDTO"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponsePasswordAccountDTO"];
                };
            };
        };
    };
    bulkDelete: {
        parameters: {
            query: {
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": Record<string, never>;
                };
            };
        };
    };
    getCurrentUserLoginHistory: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseListLoginHistoryDTO"];
                };
            };
        };
    };
    getSuspiciousLogins: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["LoginHistoryDTO"][];
                };
            };
        };
    };
    getCurrentUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["ApiResponseUserDTO"];
                };
            };
        };
    };
    getWeakPasswords: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["PasswordAccountDTO"][];
                };
            };
        };
    };
    getReusedPasswords: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "*/*": components["schemas"]["PasswordAccountDTO"][];
                };
            };
        };
    };
}
