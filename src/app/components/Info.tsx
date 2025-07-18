'use client';
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import {Spade, Play, Heart, CircleArrowDown, Clover} from 'lucide-react';
import {siteConfig} from "@/utils/siteConfig";
import ReleaseSlider from "@/app/components/ReleaseSlider";

const PragmaticPlayIcon = () => (
    <svg fill="none" viewBox="0 0 150 56" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M109.293 22.554c-4.808.303-2.649 6.655 2.665 6.32 5.2-.328 2.457-6.643-2.665-6.32z"
            fill="#F19021"
        />
        <path
            d="M107.262 18.63a15.33 15.33 0 00-8.605 2.649 15.666 15.666 0 00-5.704 7.052 15.924 15.924 0 00-.882 9.078 15.785 15.785 0 004.24 8.045 15.42 15.42 0 007.93 4.3 15.28 15.28 0 008.948-.894 15.53 15.53 0 006.951-5.787 15.875 15.875 0 002.611-8.73c0-4.167-1.632-8.163-4.537-11.11a15.376 15.376 0 00-10.952-4.602zm0 29.78a13.72 13.72 0 01-7.7-2.37 14.02 14.02 0 01-5.106-6.31 14.25 14.25 0 01-.79-8.124 14.125 14.125 0 013.793-7.2 13.802 13.802 0 017.096-3.849 13.68 13.68 0 018.009.8 13.914 13.914 0 016.221 5.178 14.248 14.248 0 011.282 13.193 14.084 14.084 0 01-3.004 4.562 13.85 13.85 0 01-4.497 3.048 13.684 13.684 0 01-5.304 1.071zm-.468-40.748c-3.675 2.82-3.036 7.143-3.036 7.143S101.445 8.722 98.445 5c-.403 4.788 1.075 11.135 1.075 11.135s-1.88-3.935-6.484-4.155c3.82 2.226 5.301 6.24 5.64 7.316a15.237 15.237 0 017.554-2.32c-.302-1.001-1.372-5.223.566-9.314h-.002z"
            fill="#F19021"
        />
        <path
            d="M27.349 35.884v3.288H26v-8.473h2.84c.962 0 1.685.232 2.17.697.484.465.728 1.102.731 1.909 0 .8-.249 1.43-.746 1.889-.496.46-1.213.69-2.15.69h-1.496zm3.016-2.58c0-.48-.132-.847-.397-1.099-.263-.252-.687-.378-1.27-.377h-1.35v2.938h1.35c1.11 0 1.667-.487 1.667-1.463zm6.943 5.868l-2.081-3.383h-.958v3.383h-1.35v-8.473h2.945c.954 0 1.678.236 2.171.708.493.472.74 1.096.739 1.872 0 .66-.184 1.204-.55 1.633-.367.428-.895.7-1.586.816l2.196 3.442-1.526.002zm-3.04-4.357h1.488c1.09 0 1.633-.487 1.633-1.463 0-.463-.132-.825-.395-1.086-.265-.26-.676-.39-1.238-.39H34.27v2.94zm10.707 2.521H41.45l-.64 1.836h-1.44l3.075-8.34h1.55l3.063 8.34h-1.444l-.638-1.836zm-.38-1.056l-1.384-3.96-1.385 3.96h2.77zm9.274-4.909a3.51 3.51 0 011.313 2.029h-1.419a2.293 2.293 0 00-.893-1.092 2.619 2.619 0 00-1.472-.409 2.673 2.673 0 00-1.403.371c-.416.25-.752.617-.97 1.055a3.495 3.495 0 00-.342 1.615 3.633 3.633 0 00.354 1.668c.221.447.569.818 1 1.062.458.253.974.38 1.496.371a2.615 2.615 0 001.784-.663c.496-.435.796-1.033.9-1.794h-3.068v-1.01h4.198v1.308a4.085 4.085 0 01-.655 1.7 3.769 3.769 0 01-1.36 1.219 4.022 4.022 0 01-1.934.454 4.15 4.15 0 01-2.154-.552 3.746 3.746 0 01-1.443-1.528 5.175 5.175 0 010-4.477 3.73 3.73 0 011.437-1.526 4.162 4.162 0 012.148-.544c.994 0 1.822.247 2.484.742l-.001.001zm11.002-.538v8.339h-1.36V32.92l-2.379 6.252H59.95l-2.39-6.252v6.252h-1.348v-8.34h1.632l2.72 6.66 2.673-6.66h1.634zm6.6 6.503h-3.52l-.639 1.836h-1.448l3.076-8.34h1.55l3.063 8.34H72.11l-.64-1.836zm-.38-1.056l-1.383-3.96-1.384 3.96h2.768zm8.236-5.58v1.103h-2.332v7.369h-1.36v-7.369h-2.319v-1.104l6.01.002zm2.068 0v8.472h-1.347v-8.473l1.347.002zm7.63.707a3.878 3.878 0 011.373 2.149h-1.434a2.57 2.57 0 00-.939-1.217 2.693 2.693 0 00-1.58-.451 2.434 2.434 0 00-1.33.37c-.4.26-.718.628-.922 1.062a4.006 4.006 0 000 3.217c.203.434.522.802.922 1.062.4.25.861.379 1.33.371a2.692 2.692 0 001.58-.45c.427-.295.755-.715.94-1.205h1.433a3.84 3.84 0 01-1.372 2.142c-.679.524-1.53.786-2.556.786a3.995 3.995 0 01-2.093-.546 3.67 3.67 0 01-1.408-1.524 5.275 5.275 0 010-4.477 3.717 3.717 0 011.408-1.53 3.962 3.962 0 012.092-.552c1.025 0 1.877.265 2.557.793zm7.734 4.477v3.288h-1.347v-8.473h2.837c.962 0 1.686.232 2.172.697.487.465.731 1.102.732 1.909 0 .8-.249 1.43-.746 1.889-.496.46-1.213.69-2.15.69h-1.498zm3.02-2.58c0-.48-.131-.847-.394-1.099-.265-.252-.689-.378-1.273-.377h-1.353v2.938h1.349c1.114 0 1.671-.487 1.671-1.463zm3.686 4.8h2.888v1.068h-4.235v-8.473h1.349l-.002 7.405zm9.063-.768h-3.525l-.639 1.836h-1.444l3.076-8.34h1.551l3.064 8.34h-1.444l-.639-1.836zm-.379-1.056l-1.383-3.96-1.384 3.96h2.767zm7.875-5.58l-2.779 5.387v3.085h-1.359v-3.085l-2.79-5.387h1.562l1.916 3.924 1.916-3.925 1.534.002z"
            fill="#fff"
        />
    </svg>
);
const EvolutionPlayIcon = () => (
    <svg fill="none" viewBox="0 0 150 56" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.947 17.207c-.972.216-1.436.371-2.385.797l-.562.252.419 1.006c1.089 2.618 1.842 3.9 2.972 5.055 1.216 1.245 2.779 2.05 4.9 2.526.837.187 1.637.26 3.42.308 2.696.073 2.899.045 2.897-.399-.003-.596-.414-2.381-.768-3.335-1.674-4.51-6.407-7.208-10.893-6.21zM74.878 27.7v8.889h3.191V18.812h-3.191V27.7zm-36.968.115v8.774h12.542v-2.867h-9.35V29.02h6.051v-2.868h-6.051V21.91h9.132v-2.87H37.91v8.774zm62.714-7.168v1.606h3.3V19.04h-3.3v1.606zm-5.419.191l-1.513.878v2.372h-1.76v2.638h1.76l.003 3.698c.001 2.102.051 3.922.115 4.215.167.762.56 1.309 1.168 1.62.476.245.705.276 2.262.311l1.733.039v-2.773h-.918c-1.365 0-1.282.244-1.282-3.765v-3.345H99.2l-.031-1.29-.032-1.29-1.18-.034-1.18-.032-.03-2.06-.03-2.06-1.513.878zm-29.294 3.137c-1.828.38-3.394 1.6-4.155 3.235-.517 1.11-.68 1.876-.68 3.186 0 2.011.512 3.375 1.744 4.647 1.214 1.253 2.496 1.775 4.356 1.775 2.51 0 4.548-1.227 5.544-3.338 1.866-3.952-.086-8.594-3.975-9.453-.797-.177-2.119-.2-2.834-.052zm44.23 0c-2.45.509-4.269 2.418-4.733 4.968-.44 2.422.129 4.539 1.642 6.1 1.214 1.253 2.496 1.775 4.356 1.775 1.826 0 3.325-.6 4.47-1.79 2.356-2.448 2.375-6.895.041-9.333-.733-.766-1.932-1.445-2.942-1.668-.798-.177-2.119-.2-2.834-.052zm14.248.067c-.688.258-1.434.855-1.761 1.408-.151.257-.299.468-.33.47-.03.002-.055-.397-.055-.886v-.889l-1.568-.032-1.567-.032V36.59h3.18l.032-3.928c.032-3.82.04-3.944.286-4.5.473-1.07 1.028-1.47 2.058-1.483.913-.012 1.45.293 1.814 1.03l.276.56.034 4.16.034 4.16H130l-.004-4.042c-.004-4.297-.087-5.282-.536-6.34-.378-.89-.926-1.492-1.737-1.909-.647-.332-.852-.379-1.785-.408-.761-.023-1.192.02-1.549.153zm-74.653.476c.089.236 1.125 3.036 2.302 6.222l2.141 5.792h3.006l2.174-6.194 2.173-6.193-1.539-.032c-.846-.017-1.564-.006-1.594.026-.03.031-.617 1.904-1.305 4.16a464.199 464.199 0 01-1.315 4.276c-.036.094-.431-.935-.88-2.294a7415.47 7415.47 0 00-1.433-4.33l-.618-1.863h-3.274l.162.43zm30.203 3.904c0 3.476.033 4.464.165 4.992.523 2.093 1.894 3.277 3.917 3.382 1.43.074 2.046-.150 2.923-1.066l.697-.726v1.585h3.191V24.088h-3.173l-.045 3.813c-.048 4.166-.109 4.623-.714 5.373-.602.745-1.738.996-2.615.576-.524-.25-.75-.498-1.013-1.108-.174-.403-.2-.916-.232-4.554l-.035-4.1h-3.066v4.334zm20.685 1.916v6.25h3.19v-12.5h-3.19v6.25zm-32.018-3.455c1.018.529 1.58 1.775 1.582 3.513.003 1.693-.556 2.887-1.62 3.467-.657.357-2.032.36-2.673.005-1.096-.608-1.58-1.674-1.58-3.482 0-1.24.169-1.95.63-2.657.732-1.122 2.39-1.505 3.66-.846zm44.2-.024c.862.423 1.378 1.318 1.568 2.717.266 1.95-.351 3.612-1.593 4.293-.639.351-2.022.35-2.656-.001-1.1-.61-1.613-1.74-1.601-3.524.012-1.696.471-2.772 1.433-3.36a2.936 2.936 0 012.849-.125zm-83.038 1.135c-3.02.375-5.036 1.32-6.672 3.128-.962 1.062-1.509 1.992-2.453 4.167l-.638 1.472.728.37c1.285.655 2.278.866 4.084.869 1.303.002 1.757-.043 2.476-.247 3.3-.938 5.762-3.415 6.8-6.845.316-1.047.596-2.762.471-2.892-.12-.125-3.825-.143-4.796-.022z"
            fill="#fff"></path>
    </svg>
);
const EzugiIcon = () => (
    <svg fill="none" viewBox="0 0 150 56" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#hla)">
            <path
                d="M89.173 37.087c0 .174-.1.304-.235.304-.636 0-1.206.13-1.91.174-.602 0-1.205.087-1.808.218-.067 0-.168 0-.201-.087a.39.39 0 01-.067-.218v-1.696c0-.173-.1-.304-.235-.304-.033 0-.1 0-.134.044-.536.521-1.105 1-1.675 1.434-.804.566-1.373.87-2.144.87-1.842 0-3.45-1.391-3.45-5.087v-6.74c0-1.825-.235-2.216-.905-2.39l-.603-.174c-.1-.044-.167-.13-.2-.261l-.034-.392c0-.173.067-.304.2-.347.771-.044 2.714-.13 3.485-.174.134 0 .234.087.268.26v9.261c0 3.044 1.206 3.87 2.445 3.87 1.072-.043 2.11-.565 2.915-1.565.067-.044.067-.13.067-.218V26c0-1.825-.268-2.216-1.173-2.39l-.804-.174a.361.361 0 01-.2-.305v-.391c0-.174.1-.304.234-.304.904-.044 3.048-.13 3.852-.174.134 0 .235.13.268.304v11.087c0 1.696.235 2.696 1.307 2.783l.536.043c.134 0 .234.13.234.304l-.033.305zm-14.137-3.565c-.335 1.174-.737 2.435-1.072 3.609a.305.305 0 01-.302.26h-8.676c-.134 0-.235-.086-.302-.26v-.044c-.066-.13-.033-.304.034-.435a435.135 435.135 0 006.432-12.39c.1-.218.067-.48-.1-.61-.067-.043-.135-.087-.168-.087h-1.843c-2.01 0-2.344.522-3.148 2.435l-.269.652a.336.336 0 01-.401.218l-.101-.087a.441.441 0 01-.201-.522 45.44 45.44 0 00.737-3.478c.033-.218.167-.348.335-.348h8.04c.134 0 .268.087.301.26a.651.651 0 01-.033.436c-2.144 4.087-4.221 8.217-6.332 12.478-.1.217-.067.478.101.609.067.043.1.087.168.087h2.11c2.11 0 2.647-.696 3.718-2.74v-.043l.202-.435c.1-.217.267-.26.435-.174l.168.087c.167.044.234.305.167.522zm26.164 3.434c0-.26.134-.434.335-.478 1.541-.217 2.311-.522 2.311-2.696V26.74c0-2-.067-2.652-1.44-2.957-.168-.043-.302-.217-.302-.478v-.391c0-.261.168-.478.335-.478.603 0 1.876-.087 3.015-.174.201 0 .369.174.369.434v11.087c0 2.174.335 2.522 1.809 2.696a.48.48 0 01.335.478c0 .261-.168.479-.369.479h-6.063c-.168-.044-.335-.218-.335-.479z"
                fill="#fff"
            />
            <path
                d="M43.78 17.565L62.609 11l-.704 35L41 40.826l2.78-23.26z"
                fill="#3B8BC8"
            />
            <path
                d="M62.607 11l1.005.957-.67 32.478L61.904 46l.703-35z"
                fill="#2676AE"
            />
            <path
                opacity=".2"
                d="M43.78 17.565l-.267 1.652v.218c0 10.13 6.23 18.348 14.438 18.348 1.407 0 2.814-.261 4.154-.74l.536-26.087-18.86 6.61z"
                fill="#fff"
            />
            <path
                d="M60.296 35.174c-.335 1.348-1.373 5.174-1.809 6.391L42.91 38.61l.067-.783c2.88.26 3.149.044 3.35-2.478L47.298 23c.235-2.783-.033-2.826-2.646-2.26l.067-.827 15.443-4.783c-.1 1-.167 3.74-.268 5.783l-1.038.391c-.168-1.608-.436-2.391-.838-3.087-.368-.739-1.34-.695-3.886 0l-2.646.74c-1.072.304-1.14.434-1.206 1.39l-.637 7.566 3.15-.304c3.115-.305 3.316-.61 3.952-3.218l1.005-.174-.67 7.522h-1.005c-.2-2.696-.435-2.913-3.383-2.74l-3.183.218-.469 6.218c-.134 1.565 0 2.304.57 2.782.57.522 1.708.696 3.35 1 2.512.392 3.484.261 4.321-.652a14.06 14.06 0 002.077-3.608l.938.217zm40.602-12.087c0 .348-.201.609-.469.652-.503.044-1.005.217-1.206.696a.495.495 0 000 .434c.368.783.57 1.653.57 2.566 0 3.695-2.48 5.478-4.858 5.478a4.8 4.8 0 01-1.106-.13c-.2-.044-.402.043-.57.217-.3.348-.569.783-.569 1.174 0 .652.503 1.043 1.742 1.043 1.039 0 2.01-.13 2.881 0 1.709.218 3.652 1.957 3.652 4.696 0 2.87-2.68 5-6.365 5-3.116 0-4.992-2-4.992-3.913 0-2.391 2.01-3.174 2.647-3.826.1-.087.1-.261.033-.391-.033-.044-.067-.087-.1-.087-.804-.435-1.44-.566-1.675-1.087-.871-1.913 1.474-2.392 1.943-3 .067-.087.067-.261 0-.392-.034-.043-.034-.043-.067-.043-1.307-.783-2.178-2.522-2.178-4.435 0-3.87 2.814-5.695 4.958-5.695h.034c.57 0 1.139.13 1.708.347.067.044.134.044.235.044h3.249c.302.043.503.348.503.652zm-9.079 16.74c0 1.869 1.44 3.52 3.484 3.52 2.546 0 3.618-1.347 3.82-2.651.234-1.522-.403-2.392-1.207-3.044-.636-.522-1.072-.739-2.311-.826-2.546-.13-3.786 2.044-3.786 3zm.804-12.653c0 2.652 1.072 4.565 2.613 4.565 1.206-.043 2.312-1.348 2.312-4.087s-1.039-4.565-2.647-4.565c-1.139 0-2.244 1.435-2.278 4.087z"
                fill="#fff"
            />
            <path
                d="M102.64 18.087c.201 1.044 1.072 1.652 1.977 1.348.904-.304 1.507-1.435 1.306-2.522-.201-1.043-1.072-1.652-1.976-1.304-.905.348-1.474 1.391-1.307 2.478z"
                fill="#3D91CF"
            />
        </g>
        <defs>
            <clipPath id="hla">
                <path fill="#fff" transform="translate(41 11)" d="M0 0h67v35H0z"></path>
            </clipPath>
        </defs>
    </svg>
);
const LuckyStreakIcon = () => (
    <svg fill="none" viewBox="0 0 150 56" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#iea)">
            <path
                d="M76.888 37.957v-2.895c.864.032 1.696 0 2.56 0v-2.35c-.864 0-1.696-.031-2.56 0v-2.476h2.848c.032-.805.032-1.577 0-2.349a147.83 147.83 0 00-5.344 0v12.611c1.792 0 3.552.033 5.344 0V37.99c-.96-.032-1.92-.064-2.848-.032zm17.216-4.086c-.128-.547.224-1.03.416-1.544.672-1.512 1.376-2.992 1.984-4.504-.896 0-1.792-.032-2.656 0-.768 1.802-1.6 3.57-2.368 5.34-.032-1.801 0-3.57-.032-5.372h-2.464c-.032 4.182 0 8.396 0 12.579h2.496c.032-1.963-.032-3.925.096-5.888.128.45.288.901.48 1.32a111.95 111.95 0 011.824 4.568c.896.032 1.792.032 2.688 0-.672-2.156-1.664-4.279-2.464-6.499zm-35.552-3.314v-.45.45zm.128 4.537c-.416-.644-.992-1.126-1.504-1.673-.576-.611-1.376-1.158-1.536-1.995-.032-.16-.032-.322.032-.45.128-.386.32-.74.736-.869.736-.257 1.472.257 2.176.483v-2.156s-.192-.29-1.12-.547l-.064-.096-.064-.032h-.032c-1.12-.258-2.336-.065-3.168.772-1.12 1.061-1.312 2.863-.8 4.279.544 1.447 1.952 2.252 2.912 3.41.544.643.192 1.77-.64 1.898l-.128.032c-.8.16-1.536-.322-2.208-.708v2.606c1.12.676 2.464.708 3.68.354 2.016-.772 2.688-3.475 1.728-5.308zm2.624 5.372V30.204h-1.952v-2.381h6.4v2.348h-1.888l-.032 10.263-2.528.032zm10.144-5.758c.608-.226 1.12-.612 1.44-1.159.544-.933.544-2.059.416-3.088a2.839 2.839 0 00-1.856-2.316c-1.568-.515-3.232-.258-4.832-.29 0 4.182-.032 8.397 0 12.611v.032h2.464v-.032h.096v-5.019c.16.45.288.901.448 1.352.48 1.158.992 2.51 1.472 3.7h2.688c-.704-1.899-1.664-3.893-2.336-5.791zm-1.056-1.706c-.352.29-.8.258-1.216.322v-3.506c.608 0 1.376.096 1.632.74.288.804.288 1.865-.416 2.444zm15.296-5.18h-2.656a1801.1 1801.1 0 00-2.944 12.644h2.56c.096-.45.16-.9.256-1.319l.16-.868h2.496l.384 2.187h2.528a893.565 893.565 0 00-2.784-12.643zm-2.176 8.301c.128-.643.192-1.287.288-1.93l.544-2.863c.096.74.256 1.544.384 2.284l.448 2.51h-1.664z"
                fill="#fff"
            />
            <path
                d="M56.376 15.791h-3.328v10.07h5.632v-2.767h-2.336v-7.303h.032zm-1.792 9.298a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.515-.512.515zm0-1.512a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.58.58 0 01-.512.514zm0-1.513a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.58.58 0 01-.512.514zm0-1.512a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.58.58 0 01-.512.514zm0-1.512a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.52.52 0 01-.512.482v.032zm0-1.512a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.518.518 0 01-.512.45v.064zm3.008 6.531c.288 0 .512.225.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c.032-.29.256-.515.512-.515zm-.992.483c0 .29-.224.514-.512.514a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288.032.512.257.512.515 0 .032 0 0 0 0zm8.416-2.96c0 .997-.576 1.64-1.312 1.64-.736 0-1.408-.643-1.408-1.64V15.79h-3.008v5.79c0 2.671 1.76 4.408 4.384 4.408 2.624 0 4.352-1.705 4.352-4.407V15.79h-3.008v5.79zm-4.224-5.115c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm0 1.512c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm0 1.512c.288 0 .512.225.512.515a.507.507 0 01-.512.514.507.507 0 01-.512-.514c0-.29.224-.515.512-.515zm-.512 2.027c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.514-.512.514a.507.507 0 01-.512-.514zm.96 1.93a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.226.512.515-.032.29-.224.515-.512.515 0 .032 0 .032 0 0zm.928 1.255a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.504.504 0 01-.448.547h-.064v-.032zm1.472.353a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.192.514-.512.514.032.033.032 0 0 0zm2.848-8.59c.288 0 .512.226.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm0 1.513c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm0 1.512c.288 0 .512.225.512.515a.507.507 0 01-.512.514.507.507 0 01-.512-.514c0-.29.224-.515.512-.515zm0 1.512c.288 0 .512.225.512.515 0 .29-.224.514-.512.514a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515zm-.352 1.415c.288 0 .512.226.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.482.512-.515zm-.416 1.77c0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288.032.512.257.512.515 0 .032 0 0 0 0zm8.768-5.888c.768 0 1.664.547 2.272 1.384l1.92-2.349a5.883 5.883 0 00-4.224-1.898c-3.136 0-5.44 2.22-5.44 5.308 0 3.121 2.24 5.373 5.312 5.373 1.536 0 3.264-.804 4.352-2.091l-1.92-2.123c-.672.74-1.568 1.19-2.272 1.19-1.184 0-2.08-.998-2.08-2.413 0-1.416.896-2.38 2.08-2.38zm2.592-.836c.288 0 .512.225.512.515 0 .29-.224.514-.512.514a.507.507 0 01-.512-.514c.032-.29.256-.515.512-.515.032 0 .032 0 0 0zm-1.216-.901c.288 0 .512.225.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515zm-1.504-.257c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm-3.424 2.445c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm-.8 1.93c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515zm.224 1.48c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.515-.512.515-.256 0-.48-.226-.512-.515zm1.28 1.673a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.226.512.515 0 .29-.224.515-.512.515zm.064-5.212a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514.288 0 .512.225.512.514-.032.29-.256.515-.512.515zm5.344 4.343c.288 0 .512.225.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c.032-.29.256-.515.512-.515zm-1.184.837c.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514zm-1.504.225c.288 0 .512.225.512.515 0 .29-.224.514-.512.514a.507.507 0 01-.512-.514c.032-.29.256-.515.512-.515zm-1.536-.29c.288 0 .512.226.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515zm-.448-6.53c0-.29.224-.515.512-.515.288 0 .512.225.512.514 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515zm21.984-1.416l-1.408 2.542-1.376-2.542h-3.424l3.456 5.759v4.343h3.008v-4.408l3.232-5.694H94.36zm-4.416 1.126c0-.29.224-.515.512-.515.288 0 .512.226.512.515 0 .29-.224.515-.512.515a.507.507 0 01-.512-.515zm.832 1.48c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.515-.512.515-.288-.032-.512-.258-.512-.515zm1.312 1.962a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.256.514-.512.514zm.896 4.762a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.226.512.515 0 .29-.224.515-.512.515zm0-1.673a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.226.512.515 0 .29-.224.515-.512.515zm0-1.64a.507.507 0 01-.512-.516c0-.29.224-.514.512-.514.288 0 .512.225.512.514 0 .29-.224.515-.512.515zm.864-1.449a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.514-.512.514zm.8-1.447a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.225.512.515 0 .29-.224.515-.512.515zm.8-1.448a.507.507 0 01-.512-.515c0-.29.224-.515.512-.515.288 0 .512.226.512.515-.032.29-.256.515-.512.515zM84.44 15.79l-1.152 2.092v-2.091H79.96v10.07h3.328V23.48l.064-.064 1.024 2.412h3.392l-2.752-5.372 2.752-4.73H84.44v.065zm-1.056 3.411c.16-.225.448-.322.704-.16.224.16.32.45.16.707-.128.225-.448.322-.672.16a.493.493 0 01-.192-.707c0 .032 0 .032 0 0zm-1.92 5.855a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515-.032.29-.224.514-.512.514 0 .032 0 .032 0 0zm0-1.512a.507.507 0 01-.512-.515c0-.289.224-.514.512-.514.288 0 .512.225.512.514-.032.29-.256.515-.512.515zm0-1.48a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.613.613 0 01-.512.514zm0-1.512a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.613.613 0 01-.512.514zm0-1.512a.507.507 0 01-.512-.514c0-.29.224-.515.512-.515.288 0 .512.225.512.515a.58.58 0 01-.512.514zm0-1.512a.507.507 0 01-.512-.515c0-.29.224-.514.512-.514.288 0 .512.225.512.514-.032.258-.224.483-.512.483v.032zm1.888 3.732c-.256.129-.544.064-.672-.193s-.064-.547.192-.676c.224-.128.544-.064.672.161.128.226.064.515-.192.676v.032zm.128 1.126c-.128-.225-.064-.547.192-.675a.483.483 0 01.672.193c.128.225.064.546-.16.675-.256.129-.576.032-.704-.193v-.032.032zm2.4 2.06c.128.224.064.546-.192.675-.224.128-.544.064-.672-.193-.128-.226-.064-.547.16-.676a.51.51 0 01.704.129v.064zm-.768-1.288c.128.225.064.547-.192.676-.224.128-.544.064-.672-.193-.128-.225-.064-.547.16-.676a.51.51 0 01.704.129v.064zm-.064-4.697c-.128.258-.448.322-.704.193-.256-.128-.32-.45-.192-.708.128-.257.448-.321.704-.193.256.161.32.483.192.708zm.064-1.126c-.256-.129-.32-.45-.192-.708.128-.257.448-.321.704-.193.256.129.32.45.192.708-.16.258-.48.354-.704.193zm17.92 26.252c-.064.676-.64 1.223-1.312 1.223H48.056a1.324 1.324 0 01-1.312-1.223l-1.216-14.606c-.032-.321-.288-.579-.608-.579s-.608.29-.608.612v.064l1.216 14.606c.064.708.416 1.351.96 1.802a2.604 2.604 0 001.6.546h53.6c.544 0 1.088-.16 1.504-.482a2.48 2.48 0 001.056-1.834l1.312-14.606c.032-.322-.224-.643-.544-.675h-.064a.597.597 0 00-.608.546l-1.312 14.606z"
                fill="#936A29"
            />
            <path
                d="M44.216 13.25a1.915 1.915 0 01.48-1.416c.352-.418.896-.643 1.44-.643h57.76c.544 0 1.056.225 1.44.643.352.386.512.9.448 1.415L104.6 26.408c-.032.321.224.643.544.675h.064c.32 0 .576-.225.608-.547L107 13.378c.16-1.705-1.088-3.217-2.784-3.346H46.072C44.376 10 43 11.383 43 13.09v.257l1.088 13.19a.597.597 0 00.608.547c.32 0 .608-.29.608-.611v-.064L44.216 13.25z"
                fill="#936A29"
            />
        </g>
        <defs>
            <clipPath id="iea">
                <path fill="#fff" transform="translate(43 10)" d="M0 0h64v36H0z"></path>
            </clipPath>
        </defs>
    </svg>
);
export default function Info() {
    const slides = [
        {
            id: 1,
            alt: "Evolution Play",
            image: "/home/category-images/evolution.webp",
            svg: EvolutionPlayIcon,
            link: "evolution-play"
        },
        {
            id: 2,
            alt: "Pragmatic Play",
            image: "/home/category-images/pragmaticplay.webp",
            svg: PragmaticPlayIcon,
            link: "pragmatic-play"
        },
        {
            id: 3,
            alt: "Ezugi",
            image: "/home/category-images/ezugi.webp",
            svg: EzugiIcon,
            link: "ezugi"
        },
        {
            id: 4,
            alt: "Lucky Streak",
            image: "/home/category-images/luckystreak.webp",
            svg: LuckyStreakIcon,
            link: "lucky-streak"
        },
    ];
    const popularSlides = [
        {id: 1, alt: "Might Of Freya", image: "/home/games-images/might-of-freya.webp", link: "might-of-freya"},
        {id: 8, alt: "Oishi Delights", image: "/home/games-images/oishi-delights.webp", link: "oishi-delights"},
        {id: 2, alt: "Angel Vs Sinner", image: "/home/games-images/angel-vs-sinner.webp", link: "angel-vs-sinner"},
        {id: 3, alt: "Circus Delight", image: "/home/games-images/circis-delight.webp", link: "circus-delight"},
        {id: 4, alt: "Cocktail Nights", image: "/home/games-images/cocktail-nights.webp", link: "cocktail-nights"},
        {
            id: 5,
            alt: "Eternal Empress Freeze Time",
            image: "/home/games-images/eternal-empress-freeze-time.webp",
            link: "eternal-empress-freeze-time"
        },
        {id: 6, alt: "Geisha's Revenge", image: "/home/games-images/geisha's-revenge.webp", link: "geishas-revenge"},
        {id: 7, alt: "Hot Fiesta", image: "/home/games-images/hot-fiesta.webp", link: "hot-fiesta"},
        {id: 9, alt: "Rio Fantasia", image: "/home/games-images/rio-fantasia.webp", link: "rio-fantasia"},
        {
            id: 10,
            alt: "Starlight Princess",
            image: "/home/games-images/starlight-princess.webp",
            link: "starlight-princess"
        },
        {id: 11, alt: "Super Cole Drive", image: "/home/games-images/super-cole-drive.webp", link: "super-cole-drive"},
    ];

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-4 justify-between">
                        <h2 className="flex gap-2 items-center prose dark:prose-invert font-semibold">
                            <Clover className="w-6 h-6"/>Top jogos
                        </h2>
                        <Link className="text-xs underline text-primary-800 dark:text-primary-500"
                              href={siteConfig.defaultLink}>
                            Mostrar tudo
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {popularSlides.map((slide) => (
                            <Link href={`${siteConfig.defaultLink}${slide.link}`} key={slide.id} target="_blank"
                                  rel="noopener noreferrer">
                                <div className="effect-cards rounded-xl overflow-hidden relative">
                                    <Image width={300} height={300} src={slide.image} alt={slide.alt}
                                           title={slide.alt} loading="lazy"/>
                                    <div className="overlay" aria-hidden="true"></div>
                                    <div className="play"><Play className="text-white"/></div>
                                    <div className="heart"><Heart className="text-white" size={20}/></div>
                                </div>
                            </Link>
                        ))}
                        <div className="relative">
                            <Link href={`${siteConfig.defaultLink}fortune-tiger`} target="_blank" rel="noopener noreferrer">
                                <Image width={300} height={300} src="/home/games-images/fortune-tiger.webp"
                                       alt="Mais" title="Mais" className="rounded-xl border border-gray-200"
                                       loading="lazy"/>
                                <div
                                    className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-2 text-white">
                                    Mais <CircleArrowDown className="text-white"></CircleArrowDown>
                                </div>
                                <div
                                    className="absolute top-0 left-0 right-0 bottom-0 bg-[#0d0d0de8] rounded-lg"></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- Seção Cassino ao Vivo --- */}
                <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl flex flex-col gap-2">
                    <div className="flex items-center gap-4 justify-between">
                        <h2 className="flex gap-2 items-center prose dark:prose-invert font-semibold">
                            <Spade className="w-6 h-6"/>Cassino ao vivo
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {slides.map((slide) => (
                            <Link href={`${siteConfig.defaultLink}${slide.link}`} key={slide.id} target="_blank"
                                  rel="noopener noreferrer">
                                <div className="effect-cards rounded-xl overflow-hidden relative">
                                    <div className="rounded-lg border-2 border-[#f6f3f436] overflow-hidden">
                                        <Image className="block" src={slide.image} width={500} height={500}
                                               alt={slide.alt} title={slide.alt} loading="lazy"/>
                                    </div>
                                    <div
                                        style={{background: 'linear-gradient(357.83deg, #121611 30.86%, rgba(11, 8, 15, 0) 99.85%)'}}
                                        className="absolute rounded-lg bottom-0 w-full h-2/6">
                                        <slide.svg/>
                                    </div>
                                    <div className="overlay" aria-hidden="true"></div>
                                    <div className="play"><Play className="text-white"/></div>
                                    <div className="heart"><Heart className="text-white" size={20}/></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <ReleaseSlider/>
            </div>
        </>
    );
}