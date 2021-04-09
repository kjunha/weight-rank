create database if not exists rankdb;
use rankdb;
# todo: api 서버 DB 마이그레이션 개발
create table if not exists records
(
    id          bigint unsigned not null auto_increment primary key,
    user_id     bigint unsigned not null,
    record_type varchar(255)    not null comment 'record_types type_key값 참조',
    rm_kg       float                    default 0 comment 'rm 키로그램으로 계산',
    rm_lb       float                    default 0 comment 'rm 파운드로 계산',
    rep_count   int unsigned comment '1회 랩 횟수 카운트',
    video_link  varchar(255) comment '영상 등록 링크',
    cert_count  int unsigned             default 0 comment '인증 횟수 카운트',
    created_at  timestamp       not null default current_timestamp,
    updated_at  timestamp       not null default current_timestamp on update current_timestamp,
    constraint user_record unique (user_id, record_type)
);

create table if not exists record_types
(
    id         bigint unsigned not null auto_increment primary key,
    type_key   varchar(4)      not null unique,
    type_value json comment '타입 다국어 표시 값'
);

insert into record_types (type_key, type_value)
values ('BP', '{
  \"en\": \"Bench Press\",
  \"ko\": \"벤치 프레스\"
}'),
       ('SQ', '{
         \"en\": \"Squat\",
         \"ko\": \"스쿼트\"
       }'),
       ('DL', '{
         \"en\": \"Deadlift\",
         \"ko\": \"데드리프트\"
       }');

create table if not exists certifications
(
    id           bigint unsigned  not null unique auto_increment primary key,
    record_id    bigint unsigned  not null,
    certifier_id bigint unsigned  not null comment '기록 인증 요청자 uid',
    consent      tinyint unsigned not null default 0 comment '0: 비인가, 1: 인가',
    created_at   timestamp        not null default current_timestamp,
    updated_at   timestamp        not null on update current_timestamp
);

create table if not exists users
(
    id            bigint unsigned not null unique auto_increment primary key,
    email         varchar(255)    not null,
    oauth_key     varchar(255)    not null,
    oauth_service varchar(255)    not null comment 'GITHUB, GOOGLE, FACEBOOK, NAVER, KAKAO',
    user_status   enum ('ACTIVE', 'INACTIVE', 'DEREGISTER', 'SUSPENDED') default 'ACTIVE',
    created_at    timestamp       not null                               default current_timestamp,
    updated_at    timestamp                                              default null on update current_timestamp,
    deleted_at    timestamp
);

create table if not exists user_profiles
(
    id           bigint unsigned not null unique auto_increment primary key,
    user_id      bigint unsigned not null,
    user_name    varchar(255)    not null unique,
    user_profile varchar(255)             default null comment '프로필 사진',
    created_at   timestamp       not null default current_timestamp,
    updated_at   timestamp                default null on update current_timestamp
);