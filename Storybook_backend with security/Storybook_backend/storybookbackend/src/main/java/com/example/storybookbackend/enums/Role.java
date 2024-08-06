package com.example.storybookbackend.enums;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.security.core.authority.SimpleGrantedAuthority;


import lombok.Getter;

@Getter
public enum Role {
    Admin(Set.of(
            Access.ADMIN_GET,
            Access.ADMIN_POST,
            Access.ADMIN_PUT,
            Access.ADMIN_DELETE,
            Access.USER_GET,
            Access.USER_POST,
            Access.USER_PUT,
            Access.USER_DELETE)),
    User(Set.of(
            Access.USER_GET,
            Access.USER_POST,
            Access.USER_PUT,
            Access.USER_DELETE));

    private final Set<Access> accesses;

    Role(Set<Access> accesses) {
        this.accesses = accesses;
    }

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getAccesses()
                .stream()
                .map(access -> new SimpleGrantedAuthority(access.getAccess()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
