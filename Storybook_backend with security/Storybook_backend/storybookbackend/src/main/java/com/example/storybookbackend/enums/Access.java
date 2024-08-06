package com.example.storybookbackend.enums;

public enum Access {
    ADMIN_GET("admin:read"),
    ADMIN_POST("admin:create"),
    ADMIN_PUT("admin:edit"),
    ADMIN_DELETE("admin:delete"),
    USER_GET("user:read"),
    USER_POST("user:create"),
    USER_PUT("user:edit"),
    USER_DELETE("user:delete");

    private final String access;

    Access(String access) {
        this.access = access;
    }

    public String getAccess() {
        return access;
    }
}
