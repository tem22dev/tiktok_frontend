import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/acce9f2adde86b3b8904a3dabcab46d2.jpeg?lk3s=a5d48078&x-expires=1710576000&x-signature=VPMvuJGhR6XEksD580wuIAUdibk%3D"
                alt=""
            />

            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>hoaiphan_official</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>hoaiphan_official</p>
            </div>
        </div>
    );
}

AccountItem.propStyles = {};

export default AccountItem;
