import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    FeedbackIcon,
    GetCoinsIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessagesIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        title: 'English',
        icon: <LanguageIcon width="2rem" height="2rem" />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        title: 'Feedback and held',
        icon: <FeedbackIcon width="2rem" height="2rem" />,
        to: '/feedback',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <KeyboardIcon width="2rem" height="2rem" />,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            title: 'View profile',
            icon: <ProfileIcon width="2rem" height="2rem" />,
            to: '/@hoaa',
        },
        {
            title: 'Get coins',
            icon: <GetCoinsIcon width="2rem" height="2rem" />,
            to: '/coin',
        },
        {
            title: 'Settings',
            icon: <SettingIcon width="2rem" height="2rem" />,
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <LogoutIcon width="2rem" height="2rem" />,
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                to={'/upload'}
                                children="Upload"
                                leftIcon={<UploadIcon width="2rem" height="2rem" />}
                                outline
                                className="btn-upload"
                            />
                            <Tippy delay={[0, 100]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                to={'/upload'}
                                children="Upload"
                                leftIcon={<UploadIcon width="2rem" height="2rem" />}
                                outline
                                className="btn-upload"
                            />
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ceb7cb3459ea9b0b9dcb190806cf6d06.jpeg?lk3s=a5d48078&x-expires=1709737200&x-signature=%2FkD%2B5NI9rLt6gsQW2MRHbWK6EPs%3D"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
