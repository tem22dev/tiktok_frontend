import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propStyles = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
