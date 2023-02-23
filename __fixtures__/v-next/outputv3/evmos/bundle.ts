import * as _153 from "./claims/v1/claims";
import * as _154 from "./claims/v1/genesis";
import * as _155 from "./claims/v1/query";
import * as _156 from "./epochs/v1/genesis";
import * as _157 from "./epochs/v1/query";
import * as _158 from "./erc20/v1/erc20";
import * as _159 from "./erc20/v1/genesis";
import * as _160 from "./erc20/v1/query";
import * as _161 from "./erc20/v1/tx";
import * as _162 from "./fees/v1/fees";
import * as _163 from "./fees/v1/genesis";
import * as _164 from "./fees/v1/query";
import * as _165 from "./fees/v1/tx";
import * as _166 from "./incentives/v1/genesis";
import * as _167 from "./incentives/v1/incentives";
import * as _168 from "./incentives/v1/query";
import * as _169 from "./inflation/v1/genesis";
import * as _170 from "./inflation/v1/inflation";
import * as _171 from "./inflation/v1/query";
import * as _172 from "./recovery/v1/genesis";
import * as _173 from "./recovery/v1/query";
import * as _174 from "./vesting/v1/query";
import * as _175 from "./vesting/v1/tx";
import * as _176 from "./vesting/v1/vesting";
import * as _3699 from "./erc20/v1/tx.amino";
import * as _3700 from "./fees/v1/tx.amino";
import * as _3701 from "./vesting/v1/tx.amino";
import * as _3702 from "./erc20/v1/tx.registry";
import * as _3703 from "./fees/v1/tx.registry";
import * as _3704 from "./vesting/v1/tx.registry";
import * as _3705 from "./claims/v1/query.lcd";
import * as _3706 from "./epochs/v1/query.lcd";
import * as _3707 from "./erc20/v1/query.lcd";
import * as _3708 from "./fees/v1/query.lcd";
import * as _3709 from "./incentives/v1/query.lcd";
import * as _3710 from "./inflation/v1/query.lcd";
import * as _3711 from "./recovery/v1/query.lcd";
import * as _3712 from "./vesting/v1/query.lcd";
import * as _3713 from "./claims/v1/query.rpc.Query";
import * as _3714 from "./epochs/v1/query.rpc.Query";
import * as _3715 from "./erc20/v1/query.rpc.Query";
import * as _3716 from "./fees/v1/query.rpc.Query";
import * as _3717 from "./incentives/v1/query.rpc.Query";
import * as _3718 from "./inflation/v1/query.rpc.Query";
import * as _3719 from "./recovery/v1/query.rpc.Query";
import * as _3720 from "./vesting/v1/query.rpc.Query";
import * as _3721 from "./erc20/v1/tx.rpc.msg";
import * as _3722 from "./fees/v1/tx.rpc.msg";
import * as _3723 from "./vesting/v1/tx.rpc.msg";
import * as _3724 from "./claims/v1/query.pinia.store";
import * as _3725 from "./epochs/v1/query.pinia.store";
import * as _3726 from "./erc20/v1/query.pinia.store";
import * as _3727 from "./fees/v1/query.pinia.store";
import * as _3728 from "./incentives/v1/query.pinia.store";
import * as _3729 from "./inflation/v1/query.pinia.store";
import * as _3730 from "./recovery/v1/query.pinia.store";
import * as _3731 from "./vesting/v1/query.pinia.store";
import * as _3732 from "./claims/v1/query.pinia.store";
import * as _3733 from "./epochs/v1/query.pinia.store";
import * as _3734 from "./erc20/v1/query.pinia.store";
import * as _3735 from "./fees/v1/query.pinia.store";
import * as _3736 from "./incentives/v1/query.pinia.store";
import * as _3737 from "./inflation/v1/query.pinia.store";
import * as _3738 from "./recovery/v1/query.pinia.store";
import * as _3739 from "./vesting/v1/query.pinia.store";
import * as _3740 from "./claims/v1/query.pinia.store";
import * as _3741 from "./epochs/v1/query.pinia.store";
import * as _3742 from "./erc20/v1/query.pinia.store";
import * as _3743 from "./fees/v1/query.pinia.store";
import * as _3744 from "./incentives/v1/query.pinia.store";
import * as _3745 from "./inflation/v1/query.pinia.store";
import * as _3746 from "./recovery/v1/query.pinia.store";
import * as _3747 from "./vesting/v1/query.pinia.store";
import * as _3748 from "./claims/v1/query.pinia.store";
import * as _3749 from "./epochs/v1/query.pinia.store";
import * as _3750 from "./erc20/v1/query.pinia.store";
import * as _3751 from "./fees/v1/query.pinia.store";
import * as _3752 from "./incentives/v1/query.pinia.store";
import * as _3753 from "./inflation/v1/query.pinia.store";
import * as _3754 from "./recovery/v1/query.pinia.store";
import * as _3755 from "./vesting/v1/query.pinia.store";
import * as _3756 from "./claims/v1/query.pinia.store";
import * as _3757 from "./epochs/v1/query.pinia.store";
import * as _3758 from "./erc20/v1/query.pinia.store";
import * as _3759 from "./fees/v1/query.pinia.store";
import * as _3760 from "./incentives/v1/query.pinia.store";
import * as _3761 from "./inflation/v1/query.pinia.store";
import * as _3762 from "./recovery/v1/query.pinia.store";
import * as _3763 from "./vesting/v1/query.pinia.store";
import * as _3764 from "./claims/v1/query.pinia.store";
import * as _3765 from "./epochs/v1/query.pinia.store";
import * as _3766 from "./erc20/v1/query.pinia.store";
import * as _3767 from "./fees/v1/query.pinia.store";
import * as _3768 from "./incentives/v1/query.pinia.store";
import * as _3769 from "./inflation/v1/query.pinia.store";
import * as _3770 from "./recovery/v1/query.pinia.store";
import * as _3771 from "./vesting/v1/query.pinia.store";
import * as _3772 from "./claims/v1/query.pinia.store";
import * as _3773 from "./epochs/v1/query.pinia.store";
import * as _3774 from "./erc20/v1/query.pinia.store";
import * as _3775 from "./fees/v1/query.pinia.store";
import * as _3776 from "./incentives/v1/query.pinia.store";
import * as _3777 from "./inflation/v1/query.pinia.store";
import * as _3778 from "./recovery/v1/query.pinia.store";
import * as _3779 from "./vesting/v1/query.pinia.store";
import * as _3780 from "./claims/v1/query.pinia.store";
import * as _3781 from "./epochs/v1/query.pinia.store";
import * as _3782 from "./erc20/v1/query.pinia.store";
import * as _3783 from "./fees/v1/query.pinia.store";
import * as _3784 from "./incentives/v1/query.pinia.store";
import * as _3785 from "./inflation/v1/query.pinia.store";
import * as _3786 from "./recovery/v1/query.pinia.store";
import * as _3787 from "./vesting/v1/query.pinia.store";
import * as _3788 from "./claims/v1/query.pinia.store";
import * as _3789 from "./epochs/v1/query.pinia.store";
import * as _3790 from "./erc20/v1/query.pinia.store";
import * as _3791 from "./fees/v1/query.pinia.store";
import * as _3792 from "./incentives/v1/query.pinia.store";
import * as _3793 from "./inflation/v1/query.pinia.store";
import * as _3794 from "./recovery/v1/query.pinia.store";
import * as _3795 from "./vesting/v1/query.pinia.store";
import * as _3796 from "./claims/v1/query.pinia.store";
import * as _3797 from "./epochs/v1/query.pinia.store";
import * as _3798 from "./erc20/v1/query.pinia.store";
import * as _3799 from "./fees/v1/query.pinia.store";
import * as _3800 from "./incentives/v1/query.pinia.store";
import * as _3801 from "./inflation/v1/query.pinia.store";
import * as _3802 from "./recovery/v1/query.pinia.store";
import * as _3803 from "./vesting/v1/query.pinia.store";
import * as _3804 from "./claims/v1/query.pinia.store";
import * as _3805 from "./epochs/v1/query.pinia.store";
import * as _3806 from "./erc20/v1/query.pinia.store";
import * as _3807 from "./fees/v1/query.pinia.store";
import * as _3808 from "./incentives/v1/query.pinia.store";
import * as _3809 from "./inflation/v1/query.pinia.store";
import * as _3810 from "./recovery/v1/query.pinia.store";
import * as _3811 from "./vesting/v1/query.pinia.store";
import * as _3812 from "./claims/v1/query.pinia.store";
import * as _3813 from "./epochs/v1/query.pinia.store";
import * as _3814 from "./erc20/v1/query.pinia.store";
import * as _3815 from "./fees/v1/query.pinia.store";
import * as _3816 from "./incentives/v1/query.pinia.store";
import * as _3817 from "./inflation/v1/query.pinia.store";
import * as _3818 from "./recovery/v1/query.pinia.store";
import * as _3819 from "./vesting/v1/query.pinia.store";
import * as _3820 from "./claims/v1/query.pinia.store";
import * as _3821 from "./epochs/v1/query.pinia.store";
import * as _3822 from "./erc20/v1/query.pinia.store";
import * as _3823 from "./fees/v1/query.pinia.store";
import * as _3824 from "./incentives/v1/query.pinia.store";
import * as _3825 from "./inflation/v1/query.pinia.store";
import * as _3826 from "./recovery/v1/query.pinia.store";
import * as _3827 from "./vesting/v1/query.pinia.store";
import * as _3828 from "./claims/v1/query.pinia.store";
import * as _3829 from "./epochs/v1/query.pinia.store";
import * as _3830 from "./erc20/v1/query.pinia.store";
import * as _3831 from "./fees/v1/query.pinia.store";
import * as _3832 from "./incentives/v1/query.pinia.store";
import * as _3833 from "./inflation/v1/query.pinia.store";
import * as _3834 from "./recovery/v1/query.pinia.store";
import * as _3835 from "./vesting/v1/query.pinia.store";
import * as _3836 from "./claims/v1/query.pinia.store";
import * as _3837 from "./epochs/v1/query.pinia.store";
import * as _3838 from "./erc20/v1/query.pinia.store";
import * as _3839 from "./fees/v1/query.pinia.store";
import * as _3840 from "./incentives/v1/query.pinia.store";
import * as _3841 from "./inflation/v1/query.pinia.store";
import * as _3842 from "./recovery/v1/query.pinia.store";
import * as _3843 from "./vesting/v1/query.pinia.store";
import * as _3844 from "./claims/v1/query.pinia.store";
import * as _3845 from "./epochs/v1/query.pinia.store";
import * as _3846 from "./erc20/v1/query.pinia.store";
import * as _3847 from "./fees/v1/query.pinia.store";
import * as _3848 from "./incentives/v1/query.pinia.store";
import * as _3849 from "./inflation/v1/query.pinia.store";
import * as _3850 from "./recovery/v1/query.pinia.store";
import * as _3851 from "./vesting/v1/query.pinia.store";
import * as _3852 from "./claims/v1/query.pinia.store";
import * as _3853 from "./epochs/v1/query.pinia.store";
import * as _3854 from "./erc20/v1/query.pinia.store";
import * as _3855 from "./fees/v1/query.pinia.store";
import * as _3856 from "./incentives/v1/query.pinia.store";
import * as _3857 from "./inflation/v1/query.pinia.store";
import * as _3858 from "./recovery/v1/query.pinia.store";
import * as _3859 from "./vesting/v1/query.pinia.store";
import * as _3860 from "./claims/v1/query.pinia.store";
import * as _3861 from "./epochs/v1/query.pinia.store";
import * as _3862 from "./erc20/v1/query.pinia.store";
import * as _3863 from "./fees/v1/query.pinia.store";
import * as _3864 from "./incentives/v1/query.pinia.store";
import * as _3865 from "./inflation/v1/query.pinia.store";
import * as _3866 from "./recovery/v1/query.pinia.store";
import * as _3867 from "./vesting/v1/query.pinia.store";
import * as _3868 from "./claims/v1/query.pinia.store";
import * as _3869 from "./epochs/v1/query.pinia.store";
import * as _3870 from "./erc20/v1/query.pinia.store";
import * as _3871 from "./fees/v1/query.pinia.store";
import * as _3872 from "./incentives/v1/query.pinia.store";
import * as _3873 from "./inflation/v1/query.pinia.store";
import * as _3874 from "./recovery/v1/query.pinia.store";
import * as _3875 from "./vesting/v1/query.pinia.store";
import * as _3876 from "./claims/v1/query.pinia.store";
import * as _3877 from "./epochs/v1/query.pinia.store";
import * as _3878 from "./erc20/v1/query.pinia.store";
import * as _3879 from "./fees/v1/query.pinia.store";
import * as _3880 from "./incentives/v1/query.pinia.store";
import * as _3881 from "./inflation/v1/query.pinia.store";
import * as _3882 from "./recovery/v1/query.pinia.store";
import * as _3883 from "./vesting/v1/query.pinia.store";
import * as _3884 from "./claims/v1/query.pinia.store";
import * as _3885 from "./epochs/v1/query.pinia.store";
import * as _3886 from "./erc20/v1/query.pinia.store";
import * as _3887 from "./fees/v1/query.pinia.store";
import * as _3888 from "./incentives/v1/query.pinia.store";
import * as _3889 from "./inflation/v1/query.pinia.store";
import * as _3890 from "./recovery/v1/query.pinia.store";
import * as _3891 from "./vesting/v1/query.pinia.store";
import * as _3892 from "./claims/v1/query.pinia.store";
import * as _3893 from "./epochs/v1/query.pinia.store";
import * as _3894 from "./erc20/v1/query.pinia.store";
import * as _3895 from "./fees/v1/query.pinia.store";
import * as _3896 from "./incentives/v1/query.pinia.store";
import * as _3897 from "./inflation/v1/query.pinia.store";
import * as _3898 from "./recovery/v1/query.pinia.store";
import * as _3899 from "./vesting/v1/query.pinia.store";
import * as _3900 from "./claims/v1/query.pinia.store";
import * as _3901 from "./epochs/v1/query.pinia.store";
import * as _3902 from "./erc20/v1/query.pinia.store";
import * as _3903 from "./fees/v1/query.pinia.store";
import * as _3904 from "./incentives/v1/query.pinia.store";
import * as _3905 from "./inflation/v1/query.pinia.store";
import * as _3906 from "./recovery/v1/query.pinia.store";
import * as _3907 from "./vesting/v1/query.pinia.store";
import * as _3908 from "./claims/v1/query.pinia.store";
import * as _3909 from "./epochs/v1/query.pinia.store";
import * as _3910 from "./erc20/v1/query.pinia.store";
import * as _3911 from "./fees/v1/query.pinia.store";
import * as _3912 from "./incentives/v1/query.pinia.store";
import * as _3913 from "./inflation/v1/query.pinia.store";
import * as _3914 from "./recovery/v1/query.pinia.store";
import * as _3915 from "./vesting/v1/query.pinia.store";
import * as _3916 from "./claims/v1/query.pinia.store";
import * as _3917 from "./epochs/v1/query.pinia.store";
import * as _3918 from "./erc20/v1/query.pinia.store";
import * as _3919 from "./fees/v1/query.pinia.store";
import * as _3920 from "./incentives/v1/query.pinia.store";
import * as _3921 from "./inflation/v1/query.pinia.store";
import * as _3922 from "./recovery/v1/query.pinia.store";
import * as _3923 from "./vesting/v1/query.pinia.store";
import * as _3924 from "./claims/v1/query.pinia.store";
import * as _3925 from "./epochs/v1/query.pinia.store";
import * as _3926 from "./erc20/v1/query.pinia.store";
import * as _3927 from "./fees/v1/query.pinia.store";
import * as _3928 from "./incentives/v1/query.pinia.store";
import * as _3929 from "./inflation/v1/query.pinia.store";
import * as _3930 from "./recovery/v1/query.pinia.store";
import * as _3931 from "./vesting/v1/query.pinia.store";
import * as _3932 from "./claims/v1/query.pinia.store";
import * as _3933 from "./epochs/v1/query.pinia.store";
import * as _3934 from "./erc20/v1/query.pinia.store";
import * as _3935 from "./fees/v1/query.pinia.store";
import * as _3936 from "./incentives/v1/query.pinia.store";
import * as _3937 from "./inflation/v1/query.pinia.store";
import * as _3938 from "./recovery/v1/query.pinia.store";
import * as _3939 from "./vesting/v1/query.pinia.store";
import * as _3940 from "./claims/v1/query.pinia.store";
import * as _3941 from "./epochs/v1/query.pinia.store";
import * as _3942 from "./erc20/v1/query.pinia.store";
import * as _3943 from "./fees/v1/query.pinia.store";
import * as _3944 from "./incentives/v1/query.pinia.store";
import * as _3945 from "./inflation/v1/query.pinia.store";
import * as _3946 from "./recovery/v1/query.pinia.store";
import * as _3947 from "./vesting/v1/query.pinia.store";
import * as _3948 from "./claims/v1/query.pinia.store";
import * as _3949 from "./epochs/v1/query.pinia.store";
import * as _3950 from "./erc20/v1/query.pinia.store";
import * as _3951 from "./fees/v1/query.pinia.store";
import * as _3952 from "./incentives/v1/query.pinia.store";
import * as _3953 from "./inflation/v1/query.pinia.store";
import * as _3954 from "./recovery/v1/query.pinia.store";
import * as _3955 from "./vesting/v1/query.pinia.store";
import * as _3956 from "./claims/v1/query.pinia.store";
import * as _3957 from "./epochs/v1/query.pinia.store";
import * as _3958 from "./erc20/v1/query.pinia.store";
import * as _3959 from "./fees/v1/query.pinia.store";
import * as _3960 from "./incentives/v1/query.pinia.store";
import * as _3961 from "./inflation/v1/query.pinia.store";
import * as _3962 from "./recovery/v1/query.pinia.store";
import * as _3963 from "./vesting/v1/query.pinia.store";
import * as _3964 from "./claims/v1/query.pinia.store";
import * as _3965 from "./epochs/v1/query.pinia.store";
import * as _3966 from "./erc20/v1/query.pinia.store";
import * as _3967 from "./fees/v1/query.pinia.store";
import * as _3968 from "./incentives/v1/query.pinia.store";
import * as _3969 from "./inflation/v1/query.pinia.store";
import * as _3970 from "./recovery/v1/query.pinia.store";
import * as _3971 from "./vesting/v1/query.pinia.store";
import * as _3972 from "./claims/v1/query.pinia.store";
import * as _3973 from "./epochs/v1/query.pinia.store";
import * as _3974 from "./erc20/v1/query.pinia.store";
import * as _3975 from "./fees/v1/query.pinia.store";
import * as _3976 from "./incentives/v1/query.pinia.store";
import * as _3977 from "./inflation/v1/query.pinia.store";
import * as _3978 from "./recovery/v1/query.pinia.store";
import * as _3979 from "./vesting/v1/query.pinia.store";
import * as _3980 from "./claims/v1/query.pinia.store";
import * as _3981 from "./epochs/v1/query.pinia.store";
import * as _3982 from "./erc20/v1/query.pinia.store";
import * as _3983 from "./fees/v1/query.pinia.store";
import * as _3984 from "./incentives/v1/query.pinia.store";
import * as _3985 from "./inflation/v1/query.pinia.store";
import * as _3986 from "./recovery/v1/query.pinia.store";
import * as _3987 from "./vesting/v1/query.pinia.store";
import * as _3988 from "./claims/v1/query.pinia.store";
import * as _3989 from "./epochs/v1/query.pinia.store";
import * as _3990 from "./erc20/v1/query.pinia.store";
import * as _3991 from "./fees/v1/query.pinia.store";
import * as _3992 from "./incentives/v1/query.pinia.store";
import * as _3993 from "./inflation/v1/query.pinia.store";
import * as _3994 from "./recovery/v1/query.pinia.store";
import * as _3995 from "./vesting/v1/query.pinia.store";
import * as _3996 from "./claims/v1/query.pinia.store";
import * as _3997 from "./epochs/v1/query.pinia.store";
import * as _3998 from "./erc20/v1/query.pinia.store";
import * as _3999 from "./fees/v1/query.pinia.store";
import * as _4000 from "./incentives/v1/query.pinia.store";
import * as _4001 from "./inflation/v1/query.pinia.store";
import * as _4002 from "./recovery/v1/query.pinia.store";
import * as _4003 from "./vesting/v1/query.pinia.store";
import * as _4004 from "./claims/v1/query.pinia.store";
import * as _4005 from "./epochs/v1/query.pinia.store";
import * as _4006 from "./erc20/v1/query.pinia.store";
import * as _4007 from "./fees/v1/query.pinia.store";
import * as _4008 from "./incentives/v1/query.pinia.store";
import * as _4009 from "./inflation/v1/query.pinia.store";
import * as _4010 from "./recovery/v1/query.pinia.store";
import * as _4011 from "./vesting/v1/query.pinia.store";
import * as _4012 from "./claims/v1/query.pinia.store";
import * as _4013 from "./epochs/v1/query.pinia.store";
import * as _4014 from "./erc20/v1/query.pinia.store";
import * as _4015 from "./fees/v1/query.pinia.store";
import * as _4016 from "./incentives/v1/query.pinia.store";
import * as _4017 from "./inflation/v1/query.pinia.store";
import * as _4018 from "./recovery/v1/query.pinia.store";
import * as _4019 from "./vesting/v1/query.pinia.store";
import * as _4020 from "./claims/v1/query.pinia.store";
import * as _4021 from "./epochs/v1/query.pinia.store";
import * as _4022 from "./erc20/v1/query.pinia.store";
import * as _4023 from "./fees/v1/query.pinia.store";
import * as _4024 from "./incentives/v1/query.pinia.store";
import * as _4025 from "./inflation/v1/query.pinia.store";
import * as _4026 from "./recovery/v1/query.pinia.store";
import * as _4027 from "./vesting/v1/query.pinia.store";
import * as _4028 from "./claims/v1/query.pinia.store";
import * as _4029 from "./epochs/v1/query.pinia.store";
import * as _4030 from "./erc20/v1/query.pinia.store";
import * as _4031 from "./fees/v1/query.pinia.store";
import * as _4032 from "./incentives/v1/query.pinia.store";
import * as _4033 from "./inflation/v1/query.pinia.store";
import * as _4034 from "./recovery/v1/query.pinia.store";
import * as _4035 from "./vesting/v1/query.pinia.store";
import * as _4036 from "./claims/v1/query.pinia.store";
import * as _4037 from "./epochs/v1/query.pinia.store";
import * as _4038 from "./erc20/v1/query.pinia.store";
import * as _4039 from "./fees/v1/query.pinia.store";
import * as _4040 from "./incentives/v1/query.pinia.store";
import * as _4041 from "./inflation/v1/query.pinia.store";
import * as _4042 from "./recovery/v1/query.pinia.store";
import * as _4043 from "./vesting/v1/query.pinia.store";
import * as _4044 from "./claims/v1/query.pinia.store";
import * as _4045 from "./epochs/v1/query.pinia.store";
import * as _4046 from "./erc20/v1/query.pinia.store";
import * as _4047 from "./fees/v1/query.pinia.store";
import * as _4048 from "./incentives/v1/query.pinia.store";
import * as _4049 from "./inflation/v1/query.pinia.store";
import * as _4050 from "./recovery/v1/query.pinia.store";
import * as _4051 from "./vesting/v1/query.pinia.store";
import * as _4052 from "./claims/v1/query.pinia.store";
import * as _4053 from "./epochs/v1/query.pinia.store";
import * as _4054 from "./erc20/v1/query.pinia.store";
import * as _4055 from "./fees/v1/query.pinia.store";
import * as _4056 from "./incentives/v1/query.pinia.store";
import * as _4057 from "./inflation/v1/query.pinia.store";
import * as _4058 from "./recovery/v1/query.pinia.store";
import * as _4059 from "./vesting/v1/query.pinia.store";
import * as _4060 from "./claims/v1/query.pinia.store";
import * as _4061 from "./epochs/v1/query.pinia.store";
import * as _4062 from "./erc20/v1/query.pinia.store";
import * as _4063 from "./fees/v1/query.pinia.store";
import * as _4064 from "./incentives/v1/query.pinia.store";
import * as _4065 from "./inflation/v1/query.pinia.store";
import * as _4066 from "./recovery/v1/query.pinia.store";
import * as _4067 from "./vesting/v1/query.pinia.store";
import * as _4068 from "./claims/v1/query.pinia.store";
import * as _4069 from "./epochs/v1/query.pinia.store";
import * as _4070 from "./erc20/v1/query.pinia.store";
import * as _4071 from "./fees/v1/query.pinia.store";
import * as _4072 from "./incentives/v1/query.pinia.store";
import * as _4073 from "./inflation/v1/query.pinia.store";
import * as _4074 from "./recovery/v1/query.pinia.store";
import * as _4075 from "./vesting/v1/query.pinia.store";
import * as _4076 from "./claims/v1/query.pinia.store";
import * as _4077 from "./epochs/v1/query.pinia.store";
import * as _4078 from "./erc20/v1/query.pinia.store";
import * as _4079 from "./fees/v1/query.pinia.store";
import * as _4080 from "./incentives/v1/query.pinia.store";
import * as _4081 from "./inflation/v1/query.pinia.store";
import * as _4082 from "./recovery/v1/query.pinia.store";
import * as _4083 from "./vesting/v1/query.pinia.store";
import * as _4084 from "./claims/v1/query.pinia.store";
import * as _4085 from "./epochs/v1/query.pinia.store";
import * as _4086 from "./erc20/v1/query.pinia.store";
import * as _4087 from "./fees/v1/query.pinia.store";
import * as _4088 from "./incentives/v1/query.pinia.store";
import * as _4089 from "./inflation/v1/query.pinia.store";
import * as _4090 from "./recovery/v1/query.pinia.store";
import * as _4091 from "./vesting/v1/query.pinia.store";
import * as _4092 from "./claims/v1/query.pinia.store";
import * as _4093 from "./epochs/v1/query.pinia.store";
import * as _4094 from "./erc20/v1/query.pinia.store";
import * as _4095 from "./fees/v1/query.pinia.store";
import * as _4096 from "./incentives/v1/query.pinia.store";
import * as _4097 from "./inflation/v1/query.pinia.store";
import * as _4098 from "./recovery/v1/query.pinia.store";
import * as _4099 from "./vesting/v1/query.pinia.store";
import * as _4100 from "./claims/v1/query.pinia.store";
import * as _4101 from "./epochs/v1/query.pinia.store";
import * as _4102 from "./erc20/v1/query.pinia.store";
import * as _4103 from "./fees/v1/query.pinia.store";
import * as _4104 from "./incentives/v1/query.pinia.store";
import * as _4105 from "./inflation/v1/query.pinia.store";
import * as _4106 from "./recovery/v1/query.pinia.store";
import * as _4107 from "./vesting/v1/query.pinia.store";
import * as _4108 from "./claims/v1/query.pinia.store";
import * as _4109 from "./epochs/v1/query.pinia.store";
import * as _4110 from "./erc20/v1/query.pinia.store";
import * as _4111 from "./fees/v1/query.pinia.store";
import * as _4112 from "./incentives/v1/query.pinia.store";
import * as _4113 from "./inflation/v1/query.pinia.store";
import * as _4114 from "./recovery/v1/query.pinia.store";
import * as _4115 from "./vesting/v1/query.pinia.store";
import * as _4116 from "./claims/v1/query.pinia.store";
import * as _4117 from "./epochs/v1/query.pinia.store";
import * as _4118 from "./erc20/v1/query.pinia.store";
import * as _4119 from "./fees/v1/query.pinia.store";
import * as _4120 from "./incentives/v1/query.pinia.store";
import * as _4121 from "./inflation/v1/query.pinia.store";
import * as _4122 from "./recovery/v1/query.pinia.store";
import * as _4123 from "./vesting/v1/query.pinia.store";
import * as _4124 from "./claims/v1/query.pinia.store";
import * as _4125 from "./epochs/v1/query.pinia.store";
import * as _4126 from "./erc20/v1/query.pinia.store";
import * as _4127 from "./fees/v1/query.pinia.store";
import * as _4128 from "./incentives/v1/query.pinia.store";
import * as _4129 from "./inflation/v1/query.pinia.store";
import * as _4130 from "./recovery/v1/query.pinia.store";
import * as _4131 from "./vesting/v1/query.pinia.store";
import * as _4132 from "./claims/v1/query.pinia.store";
import * as _4133 from "./epochs/v1/query.pinia.store";
import * as _4134 from "./erc20/v1/query.pinia.store";
import * as _4135 from "./fees/v1/query.pinia.store";
import * as _4136 from "./incentives/v1/query.pinia.store";
import * as _4137 from "./inflation/v1/query.pinia.store";
import * as _4138 from "./recovery/v1/query.pinia.store";
import * as _4139 from "./vesting/v1/query.pinia.store";
import * as _4140 from "./claims/v1/query.pinia.store";
import * as _4141 from "./epochs/v1/query.pinia.store";
import * as _4142 from "./erc20/v1/query.pinia.store";
import * as _4143 from "./fees/v1/query.pinia.store";
import * as _4144 from "./incentives/v1/query.pinia.store";
import * as _4145 from "./inflation/v1/query.pinia.store";
import * as _4146 from "./recovery/v1/query.pinia.store";
import * as _4147 from "./vesting/v1/query.pinia.store";
import * as _4148 from "./claims/v1/query.pinia.store";
import * as _4149 from "./epochs/v1/query.pinia.store";
import * as _4150 from "./erc20/v1/query.pinia.store";
import * as _4151 from "./fees/v1/query.pinia.store";
import * as _4152 from "./incentives/v1/query.pinia.store";
import * as _4153 from "./inflation/v1/query.pinia.store";
import * as _4154 from "./recovery/v1/query.pinia.store";
import * as _4155 from "./vesting/v1/query.pinia.store";
import * as _4156 from "./claims/v1/query.pinia.store";
import * as _4157 from "./epochs/v1/query.pinia.store";
import * as _4158 from "./erc20/v1/query.pinia.store";
import * as _4159 from "./fees/v1/query.pinia.store";
import * as _4160 from "./incentives/v1/query.pinia.store";
import * as _4161 from "./inflation/v1/query.pinia.store";
import * as _4162 from "./recovery/v1/query.pinia.store";
import * as _4163 from "./vesting/v1/query.pinia.store";
import * as _4164 from "./claims/v1/query.pinia.store";
import * as _4165 from "./epochs/v1/query.pinia.store";
import * as _4166 from "./erc20/v1/query.pinia.store";
import * as _4167 from "./fees/v1/query.pinia.store";
import * as _4168 from "./incentives/v1/query.pinia.store";
import * as _4169 from "./inflation/v1/query.pinia.store";
import * as _4170 from "./recovery/v1/query.pinia.store";
import * as _4171 from "./vesting/v1/query.pinia.store";
import * as _4172 from "./claims/v1/query.pinia.store";
import * as _4173 from "./epochs/v1/query.pinia.store";
import * as _4174 from "./erc20/v1/query.pinia.store";
import * as _4175 from "./fees/v1/query.pinia.store";
import * as _4176 from "./incentives/v1/query.pinia.store";
import * as _4177 from "./inflation/v1/query.pinia.store";
import * as _4178 from "./recovery/v1/query.pinia.store";
import * as _4179 from "./vesting/v1/query.pinia.store";
import * as _4180 from "./claims/v1/query.pinia.store";
import * as _4181 from "./epochs/v1/query.pinia.store";
import * as _4182 from "./erc20/v1/query.pinia.store";
import * as _4183 from "./fees/v1/query.pinia.store";
import * as _4184 from "./incentives/v1/query.pinia.store";
import * as _4185 from "./inflation/v1/query.pinia.store";
import * as _4186 from "./recovery/v1/query.pinia.store";
import * as _4187 from "./vesting/v1/query.pinia.store";
import * as _4188 from "./claims/v1/query.pinia.store";
import * as _4189 from "./epochs/v1/query.pinia.store";
import * as _4190 from "./erc20/v1/query.pinia.store";
import * as _4191 from "./fees/v1/query.pinia.store";
import * as _4192 from "./incentives/v1/query.pinia.store";
import * as _4193 from "./inflation/v1/query.pinia.store";
import * as _4194 from "./recovery/v1/query.pinia.store";
import * as _4195 from "./vesting/v1/query.pinia.store";
import * as _4196 from "./claims/v1/query.pinia.store";
import * as _4197 from "./epochs/v1/query.pinia.store";
import * as _4198 from "./erc20/v1/query.pinia.store";
import * as _4199 from "./fees/v1/query.pinia.store";
import * as _4200 from "./incentives/v1/query.pinia.store";
import * as _4201 from "./inflation/v1/query.pinia.store";
import * as _4202 from "./recovery/v1/query.pinia.store";
import * as _4203 from "./vesting/v1/query.pinia.store";
import * as _4204 from "./claims/v1/query.pinia.store";
import * as _4205 from "./epochs/v1/query.pinia.store";
import * as _4206 from "./erc20/v1/query.pinia.store";
import * as _4207 from "./fees/v1/query.pinia.store";
import * as _4208 from "./incentives/v1/query.pinia.store";
import * as _4209 from "./inflation/v1/query.pinia.store";
import * as _4210 from "./recovery/v1/query.pinia.store";
import * as _4211 from "./vesting/v1/query.pinia.store";
import * as _4212 from "./claims/v1/query.pinia.store";
import * as _4213 from "./epochs/v1/query.pinia.store";
import * as _4214 from "./erc20/v1/query.pinia.store";
import * as _4215 from "./fees/v1/query.pinia.store";
import * as _4216 from "./incentives/v1/query.pinia.store";
import * as _4217 from "./inflation/v1/query.pinia.store";
import * as _4218 from "./recovery/v1/query.pinia.store";
import * as _4219 from "./vesting/v1/query.pinia.store";
import * as _4220 from "./claims/v1/query.pinia.store";
import * as _4221 from "./epochs/v1/query.pinia.store";
import * as _4222 from "./erc20/v1/query.pinia.store";
import * as _4223 from "./fees/v1/query.pinia.store";
import * as _4224 from "./incentives/v1/query.pinia.store";
import * as _4225 from "./inflation/v1/query.pinia.store";
import * as _4226 from "./recovery/v1/query.pinia.store";
import * as _4227 from "./vesting/v1/query.pinia.store";
import * as _4228 from "./claims/v1/query.pinia.store";
import * as _4229 from "./epochs/v1/query.pinia.store";
import * as _4230 from "./erc20/v1/query.pinia.store";
import * as _4231 from "./fees/v1/query.pinia.store";
import * as _4232 from "./incentives/v1/query.pinia.store";
import * as _4233 from "./inflation/v1/query.pinia.store";
import * as _4234 from "./recovery/v1/query.pinia.store";
import * as _4235 from "./vesting/v1/query.pinia.store";
import * as _4236 from "./claims/v1/query.pinia.store";
import * as _4237 from "./epochs/v1/query.pinia.store";
import * as _4238 from "./erc20/v1/query.pinia.store";
import * as _4239 from "./fees/v1/query.pinia.store";
import * as _4240 from "./incentives/v1/query.pinia.store";
import * as _4241 from "./inflation/v1/query.pinia.store";
import * as _4242 from "./recovery/v1/query.pinia.store";
import * as _4243 from "./vesting/v1/query.pinia.store";
import * as _4244 from "./claims/v1/query.pinia.store";
import * as _4245 from "./epochs/v1/query.pinia.store";
import * as _4246 from "./erc20/v1/query.pinia.store";
import * as _4247 from "./fees/v1/query.pinia.store";
import * as _4248 from "./incentives/v1/query.pinia.store";
import * as _4249 from "./inflation/v1/query.pinia.store";
import * as _4250 from "./recovery/v1/query.pinia.store";
import * as _4251 from "./vesting/v1/query.pinia.store";
import * as _4252 from "./claims/v1/query.pinia.store";
import * as _4253 from "./epochs/v1/query.pinia.store";
import * as _4254 from "./erc20/v1/query.pinia.store";
import * as _4255 from "./fees/v1/query.pinia.store";
import * as _4256 from "./incentives/v1/query.pinia.store";
import * as _4257 from "./inflation/v1/query.pinia.store";
import * as _4258 from "./recovery/v1/query.pinia.store";
import * as _4259 from "./vesting/v1/query.pinia.store";
import * as _4260 from "./claims/v1/query.pinia.store";
import * as _4261 from "./epochs/v1/query.pinia.store";
import * as _4262 from "./erc20/v1/query.pinia.store";
import * as _4263 from "./fees/v1/query.pinia.store";
import * as _4264 from "./incentives/v1/query.pinia.store";
import * as _4265 from "./inflation/v1/query.pinia.store";
import * as _4266 from "./recovery/v1/query.pinia.store";
import * as _4267 from "./vesting/v1/query.pinia.store";
import * as _4268 from "./claims/v1/query.pinia.store";
import * as _4269 from "./epochs/v1/query.pinia.store";
import * as _4270 from "./erc20/v1/query.pinia.store";
import * as _4271 from "./fees/v1/query.pinia.store";
import * as _4272 from "./incentives/v1/query.pinia.store";
import * as _4273 from "./inflation/v1/query.pinia.store";
import * as _4274 from "./recovery/v1/query.pinia.store";
import * as _4275 from "./vesting/v1/query.pinia.store";
import * as _4276 from "./claims/v1/query.pinia.store";
import * as _4277 from "./epochs/v1/query.pinia.store";
import * as _4278 from "./erc20/v1/query.pinia.store";
import * as _4279 from "./fees/v1/query.pinia.store";
import * as _4280 from "./incentives/v1/query.pinia.store";
import * as _4281 from "./inflation/v1/query.pinia.store";
import * as _4282 from "./recovery/v1/query.pinia.store";
import * as _4283 from "./vesting/v1/query.pinia.store";
import * as _4284 from "./claims/v1/query.pinia.store";
import * as _4285 from "./epochs/v1/query.pinia.store";
import * as _4286 from "./erc20/v1/query.pinia.store";
import * as _4287 from "./fees/v1/query.pinia.store";
import * as _4288 from "./incentives/v1/query.pinia.store";
import * as _4289 from "./inflation/v1/query.pinia.store";
import * as _4290 from "./recovery/v1/query.pinia.store";
import * as _4291 from "./vesting/v1/query.pinia.store";
import * as _4292 from "./claims/v1/query.pinia.store";
import * as _4293 from "./epochs/v1/query.pinia.store";
import * as _4294 from "./erc20/v1/query.pinia.store";
import * as _4295 from "./fees/v1/query.pinia.store";
import * as _4296 from "./incentives/v1/query.pinia.store";
import * as _4297 from "./inflation/v1/query.pinia.store";
import * as _4298 from "./recovery/v1/query.pinia.store";
import * as _4299 from "./vesting/v1/query.pinia.store";
import * as _4300 from "./claims/v1/query.pinia.store";
import * as _4301 from "./epochs/v1/query.pinia.store";
import * as _4302 from "./erc20/v1/query.pinia.store";
import * as _4303 from "./fees/v1/query.pinia.store";
import * as _4304 from "./incentives/v1/query.pinia.store";
import * as _4305 from "./inflation/v1/query.pinia.store";
import * as _4306 from "./recovery/v1/query.pinia.store";
import * as _4307 from "./vesting/v1/query.pinia.store";
import * as _4308 from "./claims/v1/query.pinia.store";
import * as _4309 from "./epochs/v1/query.pinia.store";
import * as _4310 from "./erc20/v1/query.pinia.store";
import * as _4311 from "./fees/v1/query.pinia.store";
import * as _4312 from "./incentives/v1/query.pinia.store";
import * as _4313 from "./inflation/v1/query.pinia.store";
import * as _4314 from "./recovery/v1/query.pinia.store";
import * as _4315 from "./vesting/v1/query.pinia.store";
import * as _4316 from "./claims/v1/query.pinia.store";
import * as _4317 from "./epochs/v1/query.pinia.store";
import * as _4318 from "./erc20/v1/query.pinia.store";
import * as _4319 from "./fees/v1/query.pinia.store";
import * as _4320 from "./incentives/v1/query.pinia.store";
import * as _4321 from "./inflation/v1/query.pinia.store";
import * as _4322 from "./recovery/v1/query.pinia.store";
import * as _4323 from "./vesting/v1/query.pinia.store";
import * as _4324 from "./claims/v1/query.pinia.store";
import * as _4325 from "./epochs/v1/query.pinia.store";
import * as _4326 from "./erc20/v1/query.pinia.store";
import * as _4327 from "./fees/v1/query.pinia.store";
import * as _4328 from "./incentives/v1/query.pinia.store";
import * as _4329 from "./inflation/v1/query.pinia.store";
import * as _4330 from "./recovery/v1/query.pinia.store";
import * as _4331 from "./vesting/v1/query.pinia.store";
import * as _4332 from "./claims/v1/query.pinia.store";
import * as _4333 from "./epochs/v1/query.pinia.store";
import * as _4334 from "./erc20/v1/query.pinia.store";
import * as _4335 from "./fees/v1/query.pinia.store";
import * as _4336 from "./incentives/v1/query.pinia.store";
import * as _4337 from "./inflation/v1/query.pinia.store";
import * as _4338 from "./recovery/v1/query.pinia.store";
import * as _4339 from "./vesting/v1/query.pinia.store";
import * as _4340 from "./claims/v1/query.pinia.store";
import * as _4341 from "./epochs/v1/query.pinia.store";
import * as _4342 from "./erc20/v1/query.pinia.store";
import * as _4343 from "./fees/v1/query.pinia.store";
import * as _4344 from "./incentives/v1/query.pinia.store";
import * as _4345 from "./inflation/v1/query.pinia.store";
import * as _4346 from "./recovery/v1/query.pinia.store";
import * as _4347 from "./vesting/v1/query.pinia.store";
import * as _4348 from "./claims/v1/query.pinia.store";
import * as _4349 from "./epochs/v1/query.pinia.store";
import * as _4350 from "./erc20/v1/query.pinia.store";
import * as _4351 from "./fees/v1/query.pinia.store";
import * as _4352 from "./incentives/v1/query.pinia.store";
import * as _4353 from "./inflation/v1/query.pinia.store";
import * as _4354 from "./recovery/v1/query.pinia.store";
import * as _4355 from "./vesting/v1/query.pinia.store";
import * as _4356 from "./claims/v1/query.pinia.store";
import * as _4357 from "./epochs/v1/query.pinia.store";
import * as _4358 from "./erc20/v1/query.pinia.store";
import * as _4359 from "./fees/v1/query.pinia.store";
import * as _4360 from "./incentives/v1/query.pinia.store";
import * as _4361 from "./inflation/v1/query.pinia.store";
import * as _4362 from "./recovery/v1/query.pinia.store";
import * as _4363 from "./vesting/v1/query.pinia.store";
import * as _4364 from "./claims/v1/query.pinia.store";
import * as _4365 from "./epochs/v1/query.pinia.store";
import * as _4366 from "./erc20/v1/query.pinia.store";
import * as _4367 from "./fees/v1/query.pinia.store";
import * as _4368 from "./incentives/v1/query.pinia.store";
import * as _4369 from "./inflation/v1/query.pinia.store";
import * as _4370 from "./recovery/v1/query.pinia.store";
import * as _4371 from "./vesting/v1/query.pinia.store";
import * as _4372 from "./claims/v1/query.pinia.store";
import * as _4373 from "./epochs/v1/query.pinia.store";
import * as _4374 from "./erc20/v1/query.pinia.store";
import * as _4375 from "./fees/v1/query.pinia.store";
import * as _4376 from "./incentives/v1/query.pinia.store";
import * as _4377 from "./inflation/v1/query.pinia.store";
import * as _4378 from "./recovery/v1/query.pinia.store";
import * as _4379 from "./vesting/v1/query.pinia.store";
import * as _4380 from "./claims/v1/query.pinia.store";
import * as _4381 from "./epochs/v1/query.pinia.store";
import * as _4382 from "./erc20/v1/query.pinia.store";
import * as _4383 from "./fees/v1/query.pinia.store";
import * as _4384 from "./incentives/v1/query.pinia.store";
import * as _4385 from "./inflation/v1/query.pinia.store";
import * as _4386 from "./recovery/v1/query.pinia.store";
import * as _4387 from "./vesting/v1/query.pinia.store";
import * as _4388 from "./claims/v1/query.pinia.store";
import * as _4389 from "./epochs/v1/query.pinia.store";
import * as _4390 from "./erc20/v1/query.pinia.store";
import * as _4391 from "./fees/v1/query.pinia.store";
import * as _4392 from "./incentives/v1/query.pinia.store";
import * as _4393 from "./inflation/v1/query.pinia.store";
import * as _4394 from "./recovery/v1/query.pinia.store";
import * as _4395 from "./vesting/v1/query.pinia.store";
import * as _4396 from "./claims/v1/query.pinia.store";
import * as _4397 from "./epochs/v1/query.pinia.store";
import * as _4398 from "./erc20/v1/query.pinia.store";
import * as _4399 from "./fees/v1/query.pinia.store";
import * as _4400 from "./incentives/v1/query.pinia.store";
import * as _4401 from "./inflation/v1/query.pinia.store";
import * as _4402 from "./recovery/v1/query.pinia.store";
import * as _4403 from "./vesting/v1/query.pinia.store";
import * as _4404 from "./claims/v1/query.pinia.store";
import * as _4405 from "./epochs/v1/query.pinia.store";
import * as _4406 from "./erc20/v1/query.pinia.store";
import * as _4407 from "./fees/v1/query.pinia.store";
import * as _4408 from "./incentives/v1/query.pinia.store";
import * as _4409 from "./inflation/v1/query.pinia.store";
import * as _4410 from "./recovery/v1/query.pinia.store";
import * as _4411 from "./vesting/v1/query.pinia.store";
import * as _4412 from "./claims/v1/query.pinia.store";
import * as _4413 from "./epochs/v1/query.pinia.store";
import * as _4414 from "./erc20/v1/query.pinia.store";
import * as _4415 from "./fees/v1/query.pinia.store";
import * as _4416 from "./incentives/v1/query.pinia.store";
import * as _4417 from "./inflation/v1/query.pinia.store";
import * as _4418 from "./recovery/v1/query.pinia.store";
import * as _4419 from "./vesting/v1/query.pinia.store";
import * as _4420 from "./claims/v1/query.pinia.store";
import * as _4421 from "./epochs/v1/query.pinia.store";
import * as _4422 from "./erc20/v1/query.pinia.store";
import * as _4423 from "./fees/v1/query.pinia.store";
import * as _4424 from "./incentives/v1/query.pinia.store";
import * as _4425 from "./inflation/v1/query.pinia.store";
import * as _4426 from "./recovery/v1/query.pinia.store";
import * as _4427 from "./vesting/v1/query.pinia.store";
import * as _4428 from "./claims/v1/query.pinia.store";
import * as _4429 from "./epochs/v1/query.pinia.store";
import * as _4430 from "./erc20/v1/query.pinia.store";
import * as _4431 from "./fees/v1/query.pinia.store";
import * as _4432 from "./incentives/v1/query.pinia.store";
import * as _4433 from "./inflation/v1/query.pinia.store";
import * as _4434 from "./recovery/v1/query.pinia.store";
import * as _4435 from "./vesting/v1/query.pinia.store";
import * as _4436 from "./claims/v1/query.pinia.store";
import * as _4437 from "./epochs/v1/query.pinia.store";
import * as _4438 from "./erc20/v1/query.pinia.store";
import * as _4439 from "./fees/v1/query.pinia.store";
import * as _4440 from "./incentives/v1/query.pinia.store";
import * as _4441 from "./inflation/v1/query.pinia.store";
import * as _4442 from "./recovery/v1/query.pinia.store";
import * as _4443 from "./vesting/v1/query.pinia.store";
import * as _4444 from "./claims/v1/query.pinia.store";
import * as _4445 from "./epochs/v1/query.pinia.store";
import * as _4446 from "./erc20/v1/query.pinia.store";
import * as _4447 from "./fees/v1/query.pinia.store";
import * as _4448 from "./incentives/v1/query.pinia.store";
import * as _4449 from "./inflation/v1/query.pinia.store";
import * as _4450 from "./recovery/v1/query.pinia.store";
import * as _4451 from "./vesting/v1/query.pinia.store";
import * as _4452 from "./claims/v1/query.pinia.store";
import * as _4453 from "./epochs/v1/query.pinia.store";
import * as _4454 from "./erc20/v1/query.pinia.store";
import * as _4455 from "./fees/v1/query.pinia.store";
import * as _4456 from "./incentives/v1/query.pinia.store";
import * as _4457 from "./inflation/v1/query.pinia.store";
import * as _4458 from "./recovery/v1/query.pinia.store";
import * as _4459 from "./vesting/v1/query.pinia.store";
import * as _4460 from "./claims/v1/query.pinia.store";
import * as _4461 from "./epochs/v1/query.pinia.store";
import * as _4462 from "./erc20/v1/query.pinia.store";
import * as _4463 from "./fees/v1/query.pinia.store";
import * as _4464 from "./incentives/v1/query.pinia.store";
import * as _4465 from "./inflation/v1/query.pinia.store";
import * as _4466 from "./recovery/v1/query.pinia.store";
import * as _4467 from "./vesting/v1/query.pinia.store";
import * as _4468 from "./claims/v1/query.pinia.store";
import * as _4469 from "./epochs/v1/query.pinia.store";
import * as _4470 from "./erc20/v1/query.pinia.store";
import * as _4471 from "./fees/v1/query.pinia.store";
import * as _4472 from "./incentives/v1/query.pinia.store";
import * as _4473 from "./inflation/v1/query.pinia.store";
import * as _4474 from "./recovery/v1/query.pinia.store";
import * as _4475 from "./vesting/v1/query.pinia.store";
import * as _4476 from "./claims/v1/query.pinia.store";
import * as _4477 from "./epochs/v1/query.pinia.store";
import * as _4478 from "./erc20/v1/query.pinia.store";
import * as _4479 from "./fees/v1/query.pinia.store";
import * as _4480 from "./incentives/v1/query.pinia.store";
import * as _4481 from "./inflation/v1/query.pinia.store";
import * as _4482 from "./recovery/v1/query.pinia.store";
import * as _4483 from "./vesting/v1/query.pinia.store";
import * as _4484 from "./claims/v1/query.pinia.store";
import * as _4485 from "./epochs/v1/query.pinia.store";
import * as _4486 from "./erc20/v1/query.pinia.store";
import * as _4487 from "./fees/v1/query.pinia.store";
import * as _4488 from "./incentives/v1/query.pinia.store";
import * as _4489 from "./inflation/v1/query.pinia.store";
import * as _4490 from "./recovery/v1/query.pinia.store";
import * as _4491 from "./vesting/v1/query.pinia.store";
import * as _4492 from "./claims/v1/query.pinia.store";
import * as _4493 from "./epochs/v1/query.pinia.store";
import * as _4494 from "./erc20/v1/query.pinia.store";
import * as _4495 from "./fees/v1/query.pinia.store";
import * as _4496 from "./incentives/v1/query.pinia.store";
import * as _4497 from "./inflation/v1/query.pinia.store";
import * as _4498 from "./recovery/v1/query.pinia.store";
import * as _4499 from "./vesting/v1/query.pinia.store";
import * as _4500 from "./claims/v1/query.pinia.store";
import * as _4501 from "./epochs/v1/query.pinia.store";
import * as _4502 from "./erc20/v1/query.pinia.store";
import * as _4503 from "./fees/v1/query.pinia.store";
import * as _4504 from "./incentives/v1/query.pinia.store";
import * as _4505 from "./inflation/v1/query.pinia.store";
import * as _4506 from "./recovery/v1/query.pinia.store";
import * as _4507 from "./vesting/v1/query.pinia.store";
import * as _4508 from "./claims/v1/query.pinia.store";
import * as _4509 from "./epochs/v1/query.pinia.store";
import * as _4510 from "./erc20/v1/query.pinia.store";
import * as _4511 from "./fees/v1/query.pinia.store";
import * as _4512 from "./incentives/v1/query.pinia.store";
import * as _4513 from "./inflation/v1/query.pinia.store";
import * as _4514 from "./recovery/v1/query.pinia.store";
import * as _4515 from "./vesting/v1/query.pinia.store";
import * as _4516 from "./claims/v1/query.pinia.store";
import * as _4517 from "./epochs/v1/query.pinia.store";
import * as _4518 from "./erc20/v1/query.pinia.store";
import * as _4519 from "./fees/v1/query.pinia.store";
import * as _4520 from "./incentives/v1/query.pinia.store";
import * as _4521 from "./inflation/v1/query.pinia.store";
import * as _4522 from "./recovery/v1/query.pinia.store";
import * as _4523 from "./vesting/v1/query.pinia.store";
import * as _4524 from "./claims/v1/query.pinia.store";
import * as _4525 from "./epochs/v1/query.pinia.store";
import * as _4526 from "./erc20/v1/query.pinia.store";
import * as _4527 from "./fees/v1/query.pinia.store";
import * as _4528 from "./incentives/v1/query.pinia.store";
import * as _4529 from "./inflation/v1/query.pinia.store";
import * as _4530 from "./recovery/v1/query.pinia.store";
import * as _4531 from "./vesting/v1/query.pinia.store";
import * as _4532 from "./claims/v1/query.pinia.store";
import * as _4533 from "./epochs/v1/query.pinia.store";
import * as _4534 from "./erc20/v1/query.pinia.store";
import * as _4535 from "./fees/v1/query.pinia.store";
import * as _4536 from "./incentives/v1/query.pinia.store";
import * as _4537 from "./inflation/v1/query.pinia.store";
import * as _4538 from "./recovery/v1/query.pinia.store";
import * as _4539 from "./vesting/v1/query.pinia.store";
import * as _4540 from "./claims/v1/query.pinia.store";
import * as _4541 from "./epochs/v1/query.pinia.store";
import * as _4542 from "./erc20/v1/query.pinia.store";
import * as _4543 from "./fees/v1/query.pinia.store";
import * as _4544 from "./incentives/v1/query.pinia.store";
import * as _4545 from "./inflation/v1/query.pinia.store";
import * as _4546 from "./recovery/v1/query.pinia.store";
import * as _4547 from "./vesting/v1/query.pinia.store";
import * as _4548 from "./claims/v1/query.pinia.store";
import * as _4549 from "./epochs/v1/query.pinia.store";
import * as _4550 from "./erc20/v1/query.pinia.store";
import * as _4551 from "./fees/v1/query.pinia.store";
import * as _4552 from "./incentives/v1/query.pinia.store";
import * as _4553 from "./inflation/v1/query.pinia.store";
import * as _4554 from "./recovery/v1/query.pinia.store";
import * as _4555 from "./vesting/v1/query.pinia.store";
import * as _4556 from "./claims/v1/query.pinia.store";
import * as _4557 from "./epochs/v1/query.pinia.store";
import * as _4558 from "./erc20/v1/query.pinia.store";
import * as _4559 from "./fees/v1/query.pinia.store";
import * as _4560 from "./incentives/v1/query.pinia.store";
import * as _4561 from "./inflation/v1/query.pinia.store";
import * as _4562 from "./recovery/v1/query.pinia.store";
import * as _4563 from "./vesting/v1/query.pinia.store";
import * as _4564 from "./claims/v1/query.pinia.store";
import * as _4565 from "./epochs/v1/query.pinia.store";
import * as _4566 from "./erc20/v1/query.pinia.store";
import * as _4567 from "./fees/v1/query.pinia.store";
import * as _4568 from "./incentives/v1/query.pinia.store";
import * as _4569 from "./inflation/v1/query.pinia.store";
import * as _4570 from "./recovery/v1/query.pinia.store";
import * as _4571 from "./vesting/v1/query.pinia.store";
import * as _4572 from "./claims/v1/query.pinia.store";
import * as _4573 from "./epochs/v1/query.pinia.store";
import * as _4574 from "./erc20/v1/query.pinia.store";
import * as _4575 from "./fees/v1/query.pinia.store";
import * as _4576 from "./incentives/v1/query.pinia.store";
import * as _4577 from "./inflation/v1/query.pinia.store";
import * as _4578 from "./recovery/v1/query.pinia.store";
import * as _4579 from "./vesting/v1/query.pinia.store";
import * as _4580 from "./claims/v1/query.pinia.store";
import * as _4581 from "./epochs/v1/query.pinia.store";
import * as _4582 from "./erc20/v1/query.pinia.store";
import * as _4583 from "./fees/v1/query.pinia.store";
import * as _4584 from "./incentives/v1/query.pinia.store";
import * as _4585 from "./inflation/v1/query.pinia.store";
import * as _4586 from "./recovery/v1/query.pinia.store";
import * as _4587 from "./vesting/v1/query.pinia.store";
import * as _4588 from "./claims/v1/query.pinia.store";
import * as _4589 from "./epochs/v1/query.pinia.store";
import * as _4590 from "./erc20/v1/query.pinia.store";
import * as _4591 from "./fees/v1/query.pinia.store";
import * as _4592 from "./incentives/v1/query.pinia.store";
import * as _4593 from "./inflation/v1/query.pinia.store";
import * as _4594 from "./recovery/v1/query.pinia.store";
import * as _4595 from "./vesting/v1/query.pinia.store";
import * as _4596 from "./claims/v1/query.pinia.store";
import * as _4597 from "./epochs/v1/query.pinia.store";
import * as _4598 from "./erc20/v1/query.pinia.store";
import * as _4599 from "./fees/v1/query.pinia.store";
import * as _4600 from "./incentives/v1/query.pinia.store";
import * as _4601 from "./inflation/v1/query.pinia.store";
import * as _4602 from "./recovery/v1/query.pinia.store";
import * as _4603 from "./vesting/v1/query.pinia.store";
import * as _4604 from "./claims/v1/query.pinia.store";
import * as _4605 from "./epochs/v1/query.pinia.store";
import * as _4606 from "./erc20/v1/query.pinia.store";
import * as _4607 from "./fees/v1/query.pinia.store";
import * as _4608 from "./incentives/v1/query.pinia.store";
import * as _4609 from "./inflation/v1/query.pinia.store";
import * as _4610 from "./recovery/v1/query.pinia.store";
import * as _4611 from "./vesting/v1/query.pinia.store";
import * as _4612 from "./claims/v1/query.pinia.store";
import * as _4613 from "./epochs/v1/query.pinia.store";
import * as _4614 from "./erc20/v1/query.pinia.store";
import * as _4615 from "./fees/v1/query.pinia.store";
import * as _4616 from "./incentives/v1/query.pinia.store";
import * as _4617 from "./inflation/v1/query.pinia.store";
import * as _4618 from "./recovery/v1/query.pinia.store";
import * as _4619 from "./vesting/v1/query.pinia.store";
import * as _4620 from "./claims/v1/query.pinia.store";
import * as _4621 from "./epochs/v1/query.pinia.store";
import * as _4622 from "./erc20/v1/query.pinia.store";
import * as _4623 from "./fees/v1/query.pinia.store";
import * as _4624 from "./incentives/v1/query.pinia.store";
import * as _4625 from "./inflation/v1/query.pinia.store";
import * as _4626 from "./recovery/v1/query.pinia.store";
import * as _4627 from "./vesting/v1/query.pinia.store";
import * as _4628 from "./claims/v1/query.pinia.store";
import * as _4629 from "./epochs/v1/query.pinia.store";
import * as _4630 from "./erc20/v1/query.pinia.store";
import * as _4631 from "./fees/v1/query.pinia.store";
import * as _4632 from "./incentives/v1/query.pinia.store";
import * as _4633 from "./inflation/v1/query.pinia.store";
import * as _4634 from "./recovery/v1/query.pinia.store";
import * as _4635 from "./vesting/v1/query.pinia.store";
import * as _4636 from "./claims/v1/query.pinia.store";
import * as _4637 from "./epochs/v1/query.pinia.store";
import * as _4638 from "./erc20/v1/query.pinia.store";
import * as _4639 from "./fees/v1/query.pinia.store";
import * as _4640 from "./incentives/v1/query.pinia.store";
import * as _4641 from "./inflation/v1/query.pinia.store";
import * as _4642 from "./recovery/v1/query.pinia.store";
import * as _4643 from "./vesting/v1/query.pinia.store";
import * as _4644 from "./claims/v1/query.pinia.store";
import * as _4645 from "./epochs/v1/query.pinia.store";
import * as _4646 from "./erc20/v1/query.pinia.store";
import * as _4647 from "./fees/v1/query.pinia.store";
import * as _4648 from "./incentives/v1/query.pinia.store";
import * as _4649 from "./inflation/v1/query.pinia.store";
import * as _4650 from "./recovery/v1/query.pinia.store";
import * as _4651 from "./vesting/v1/query.pinia.store";
import * as _4652 from "./claims/v1/query.pinia.store";
import * as _4653 from "./epochs/v1/query.pinia.store";
import * as _4654 from "./erc20/v1/query.pinia.store";
import * as _4655 from "./fees/v1/query.pinia.store";
import * as _4656 from "./incentives/v1/query.pinia.store";
import * as _4657 from "./inflation/v1/query.pinia.store";
import * as _4658 from "./recovery/v1/query.pinia.store";
import * as _4659 from "./vesting/v1/query.pinia.store";
import * as _4660 from "./claims/v1/query.pinia.store";
import * as _4661 from "./epochs/v1/query.pinia.store";
import * as _4662 from "./erc20/v1/query.pinia.store";
import * as _4663 from "./fees/v1/query.pinia.store";
import * as _4664 from "./incentives/v1/query.pinia.store";
import * as _4665 from "./inflation/v1/query.pinia.store";
import * as _4666 from "./recovery/v1/query.pinia.store";
import * as _4667 from "./vesting/v1/query.pinia.store";
import * as _4668 from "./claims/v1/query.pinia.store";
import * as _4669 from "./epochs/v1/query.pinia.store";
import * as _4670 from "./erc20/v1/query.pinia.store";
import * as _4671 from "./fees/v1/query.pinia.store";
import * as _4672 from "./incentives/v1/query.pinia.store";
import * as _4673 from "./inflation/v1/query.pinia.store";
import * as _4674 from "./recovery/v1/query.pinia.store";
import * as _4675 from "./vesting/v1/query.pinia.store";
import * as _4676 from "./claims/v1/query.pinia.store";
import * as _4677 from "./epochs/v1/query.pinia.store";
import * as _4678 from "./erc20/v1/query.pinia.store";
import * as _4679 from "./fees/v1/query.pinia.store";
import * as _4680 from "./incentives/v1/query.pinia.store";
import * as _4681 from "./inflation/v1/query.pinia.store";
import * as _4682 from "./recovery/v1/query.pinia.store";
import * as _4683 from "./vesting/v1/query.pinia.store";
import * as _4684 from "./claims/v1/query.pinia.store";
import * as _4685 from "./epochs/v1/query.pinia.store";
import * as _4686 from "./erc20/v1/query.pinia.store";
import * as _4687 from "./fees/v1/query.pinia.store";
import * as _4688 from "./incentives/v1/query.pinia.store";
import * as _4689 from "./inflation/v1/query.pinia.store";
import * as _4690 from "./recovery/v1/query.pinia.store";
import * as _4691 from "./vesting/v1/query.pinia.store";
import * as _4692 from "./claims/v1/query.pinia.store";
import * as _4693 from "./epochs/v1/query.pinia.store";
import * as _4694 from "./erc20/v1/query.pinia.store";
import * as _4695 from "./fees/v1/query.pinia.store";
import * as _4696 from "./incentives/v1/query.pinia.store";
import * as _4697 from "./inflation/v1/query.pinia.store";
import * as _4698 from "./recovery/v1/query.pinia.store";
import * as _4699 from "./vesting/v1/query.pinia.store";
import * as _4700 from "./claims/v1/query.pinia.store";
import * as _4701 from "./epochs/v1/query.pinia.store";
import * as _4702 from "./erc20/v1/query.pinia.store";
import * as _4703 from "./fees/v1/query.pinia.store";
import * as _4704 from "./incentives/v1/query.pinia.store";
import * as _4705 from "./inflation/v1/query.pinia.store";
import * as _4706 from "./recovery/v1/query.pinia.store";
import * as _4707 from "./vesting/v1/query.pinia.store";
import * as _4708 from "./claims/v1/query.pinia.store";
import * as _4709 from "./epochs/v1/query.pinia.store";
import * as _4710 from "./erc20/v1/query.pinia.store";
import * as _4711 from "./fees/v1/query.pinia.store";
import * as _4712 from "./incentives/v1/query.pinia.store";
import * as _4713 from "./inflation/v1/query.pinia.store";
import * as _4714 from "./recovery/v1/query.pinia.store";
import * as _4715 from "./vesting/v1/query.pinia.store";
import * as _4716 from "./claims/v1/query.pinia.store";
import * as _4717 from "./epochs/v1/query.pinia.store";
import * as _4718 from "./erc20/v1/query.pinia.store";
import * as _4719 from "./fees/v1/query.pinia.store";
import * as _4720 from "./incentives/v1/query.pinia.store";
import * as _4721 from "./inflation/v1/query.pinia.store";
import * as _4722 from "./recovery/v1/query.pinia.store";
import * as _4723 from "./vesting/v1/query.pinia.store";
import * as _4724 from "./claims/v1/query.pinia.store";
import * as _4725 from "./epochs/v1/query.pinia.store";
import * as _4726 from "./erc20/v1/query.pinia.store";
import * as _4727 from "./fees/v1/query.pinia.store";
import * as _4728 from "./incentives/v1/query.pinia.store";
import * as _4729 from "./inflation/v1/query.pinia.store";
import * as _4730 from "./recovery/v1/query.pinia.store";
import * as _4731 from "./vesting/v1/query.pinia.store";
import * as _4732 from "./claims/v1/query.pinia.store";
import * as _4733 from "./epochs/v1/query.pinia.store";
import * as _4734 from "./erc20/v1/query.pinia.store";
import * as _4735 from "./fees/v1/query.pinia.store";
import * as _4736 from "./incentives/v1/query.pinia.store";
import * as _4737 from "./inflation/v1/query.pinia.store";
import * as _4738 from "./recovery/v1/query.pinia.store";
import * as _4739 from "./vesting/v1/query.pinia.store";
import * as _4740 from "./claims/v1/query.pinia.store";
import * as _4741 from "./epochs/v1/query.pinia.store";
import * as _4742 from "./erc20/v1/query.pinia.store";
import * as _4743 from "./fees/v1/query.pinia.store";
import * as _4744 from "./incentives/v1/query.pinia.store";
import * as _4745 from "./inflation/v1/query.pinia.store";
import * as _4746 from "./recovery/v1/query.pinia.store";
import * as _4747 from "./vesting/v1/query.pinia.store";
import * as _4748 from "./claims/v1/query.pinia.store";
import * as _4749 from "./epochs/v1/query.pinia.store";
import * as _4750 from "./erc20/v1/query.pinia.store";
import * as _4751 from "./fees/v1/query.pinia.store";
import * as _4752 from "./incentives/v1/query.pinia.store";
import * as _4753 from "./inflation/v1/query.pinia.store";
import * as _4754 from "./recovery/v1/query.pinia.store";
import * as _4755 from "./vesting/v1/query.pinia.store";
import * as _4756 from "./claims/v1/query.pinia.store";
import * as _4757 from "./epochs/v1/query.pinia.store";
import * as _4758 from "./erc20/v1/query.pinia.store";
import * as _4759 from "./fees/v1/query.pinia.store";
import * as _4760 from "./incentives/v1/query.pinia.store";
import * as _4761 from "./inflation/v1/query.pinia.store";
import * as _4762 from "./recovery/v1/query.pinia.store";
import * as _4763 from "./vesting/v1/query.pinia.store";
import * as _4764 from "./claims/v1/query.pinia.store";
import * as _4765 from "./epochs/v1/query.pinia.store";
import * as _4766 from "./erc20/v1/query.pinia.store";
import * as _4767 from "./fees/v1/query.pinia.store";
import * as _4768 from "./incentives/v1/query.pinia.store";
import * as _4769 from "./inflation/v1/query.pinia.store";
import * as _4770 from "./recovery/v1/query.pinia.store";
import * as _4771 from "./vesting/v1/query.pinia.store";
import * as _4772 from "./claims/v1/query.pinia.store";
import * as _4773 from "./epochs/v1/query.pinia.store";
import * as _4774 from "./erc20/v1/query.pinia.store";
import * as _4775 from "./fees/v1/query.pinia.store";
import * as _4776 from "./incentives/v1/query.pinia.store";
import * as _4777 from "./inflation/v1/query.pinia.store";
import * as _4778 from "./recovery/v1/query.pinia.store";
import * as _4779 from "./vesting/v1/query.pinia.store";
import * as _4780 from "./claims/v1/query.pinia.store";
import * as _4781 from "./epochs/v1/query.pinia.store";
import * as _4782 from "./erc20/v1/query.pinia.store";
import * as _4783 from "./fees/v1/query.pinia.store";
import * as _4784 from "./incentives/v1/query.pinia.store";
import * as _4785 from "./inflation/v1/query.pinia.store";
import * as _4786 from "./recovery/v1/query.pinia.store";
import * as _4787 from "./vesting/v1/query.pinia.store";
import * as _4788 from "./claims/v1/query.pinia.store";
import * as _4789 from "./epochs/v1/query.pinia.store";
import * as _4790 from "./erc20/v1/query.pinia.store";
import * as _4791 from "./fees/v1/query.pinia.store";
import * as _4792 from "./incentives/v1/query.pinia.store";
import * as _4793 from "./inflation/v1/query.pinia.store";
import * as _4794 from "./recovery/v1/query.pinia.store";
import * as _4795 from "./vesting/v1/query.pinia.store";
import * as _4796 from "./claims/v1/query.pinia.store";
import * as _4797 from "./epochs/v1/query.pinia.store";
import * as _4798 from "./erc20/v1/query.pinia.store";
import * as _4799 from "./fees/v1/query.pinia.store";
import * as _4800 from "./incentives/v1/query.pinia.store";
import * as _4801 from "./inflation/v1/query.pinia.store";
import * as _4802 from "./recovery/v1/query.pinia.store";
import * as _4803 from "./vesting/v1/query.pinia.store";
import * as _4804 from "./claims/v1/query.pinia.store";
import * as _4805 from "./epochs/v1/query.pinia.store";
import * as _4806 from "./erc20/v1/query.pinia.store";
import * as _4807 from "./fees/v1/query.pinia.store";
import * as _4808 from "./incentives/v1/query.pinia.store";
import * as _4809 from "./inflation/v1/query.pinia.store";
import * as _4810 from "./recovery/v1/query.pinia.store";
import * as _4811 from "./vesting/v1/query.pinia.store";
import * as _4812 from "./claims/v1/query.pinia.store";
import * as _4813 from "./epochs/v1/query.pinia.store";
import * as _4814 from "./erc20/v1/query.pinia.store";
import * as _4815 from "./fees/v1/query.pinia.store";
import * as _4816 from "./incentives/v1/query.pinia.store";
import * as _4817 from "./inflation/v1/query.pinia.store";
import * as _4818 from "./recovery/v1/query.pinia.store";
import * as _4819 from "./vesting/v1/query.pinia.store";
import * as _4820 from "./claims/v1/query.pinia.store";
import * as _4821 from "./epochs/v1/query.pinia.store";
import * as _4822 from "./erc20/v1/query.pinia.store";
import * as _4823 from "./fees/v1/query.pinia.store";
import * as _4824 from "./incentives/v1/query.pinia.store";
import * as _4825 from "./inflation/v1/query.pinia.store";
import * as _4826 from "./recovery/v1/query.pinia.store";
import * as _4827 from "./vesting/v1/query.pinia.store";
import * as _4828 from "./claims/v1/query.pinia.store";
import * as _4829 from "./epochs/v1/query.pinia.store";
import * as _4830 from "./erc20/v1/query.pinia.store";
import * as _4831 from "./fees/v1/query.pinia.store";
import * as _4832 from "./incentives/v1/query.pinia.store";
import * as _4833 from "./inflation/v1/query.pinia.store";
import * as _4834 from "./recovery/v1/query.pinia.store";
import * as _4835 from "./vesting/v1/query.pinia.store";
import * as _4836 from "./claims/v1/query.pinia.store";
import * as _4837 from "./epochs/v1/query.pinia.store";
import * as _4838 from "./erc20/v1/query.pinia.store";
import * as _4839 from "./fees/v1/query.pinia.store";
import * as _4840 from "./incentives/v1/query.pinia.store";
import * as _4841 from "./inflation/v1/query.pinia.store";
import * as _4842 from "./recovery/v1/query.pinia.store";
import * as _4843 from "./vesting/v1/query.pinia.store";
import * as _4844 from "./claims/v1/query.pinia.store";
import * as _4845 from "./epochs/v1/query.pinia.store";
import * as _4846 from "./erc20/v1/query.pinia.store";
import * as _4847 from "./fees/v1/query.pinia.store";
import * as _4848 from "./incentives/v1/query.pinia.store";
import * as _4849 from "./inflation/v1/query.pinia.store";
import * as _4850 from "./recovery/v1/query.pinia.store";
import * as _4851 from "./vesting/v1/query.pinia.store";
import * as _4852 from "./claims/v1/query.pinia.store";
import * as _4853 from "./epochs/v1/query.pinia.store";
import * as _4854 from "./erc20/v1/query.pinia.store";
import * as _4855 from "./fees/v1/query.pinia.store";
import * as _4856 from "./incentives/v1/query.pinia.store";
import * as _4857 from "./inflation/v1/query.pinia.store";
import * as _4858 from "./recovery/v1/query.pinia.store";
import * as _4859 from "./vesting/v1/query.pinia.store";
import * as _4860 from "./claims/v1/query.pinia.store";
import * as _4861 from "./epochs/v1/query.pinia.store";
import * as _4862 from "./erc20/v1/query.pinia.store";
import * as _4863 from "./fees/v1/query.pinia.store";
import * as _4864 from "./incentives/v1/query.pinia.store";
import * as _4865 from "./inflation/v1/query.pinia.store";
import * as _4866 from "./recovery/v1/query.pinia.store";
import * as _4867 from "./vesting/v1/query.pinia.store";
import * as _4868 from "./claims/v1/query.pinia.store";
import * as _4869 from "./epochs/v1/query.pinia.store";
import * as _4870 from "./erc20/v1/query.pinia.store";
import * as _4871 from "./fees/v1/query.pinia.store";
import * as _4872 from "./incentives/v1/query.pinia.store";
import * as _4873 from "./inflation/v1/query.pinia.store";
import * as _4874 from "./recovery/v1/query.pinia.store";
import * as _4875 from "./vesting/v1/query.pinia.store";
import * as _4876 from "./claims/v1/query.pinia.store";
import * as _4877 from "./epochs/v1/query.pinia.store";
import * as _4878 from "./erc20/v1/query.pinia.store";
import * as _4879 from "./fees/v1/query.pinia.store";
import * as _4880 from "./incentives/v1/query.pinia.store";
import * as _4881 from "./inflation/v1/query.pinia.store";
import * as _4882 from "./recovery/v1/query.pinia.store";
import * as _4883 from "./vesting/v1/query.pinia.store";
import * as _4884 from "./claims/v1/query.pinia.store";
import * as _4885 from "./epochs/v1/query.pinia.store";
import * as _4886 from "./erc20/v1/query.pinia.store";
import * as _4887 from "./fees/v1/query.pinia.store";
import * as _4888 from "./incentives/v1/query.pinia.store";
import * as _4889 from "./inflation/v1/query.pinia.store";
import * as _4890 from "./recovery/v1/query.pinia.store";
import * as _4891 from "./vesting/v1/query.pinia.store";
import * as _4892 from "./claims/v1/query.pinia.store";
import * as _4893 from "./epochs/v1/query.pinia.store";
import * as _4894 from "./erc20/v1/query.pinia.store";
import * as _4895 from "./fees/v1/query.pinia.store";
import * as _4896 from "./incentives/v1/query.pinia.store";
import * as _4897 from "./inflation/v1/query.pinia.store";
import * as _4898 from "./recovery/v1/query.pinia.store";
import * as _4899 from "./vesting/v1/query.pinia.store";
import * as _4900 from "./claims/v1/query.pinia.store";
import * as _4901 from "./epochs/v1/query.pinia.store";
import * as _4902 from "./erc20/v1/query.pinia.store";
import * as _4903 from "./fees/v1/query.pinia.store";
import * as _4904 from "./incentives/v1/query.pinia.store";
import * as _4905 from "./inflation/v1/query.pinia.store";
import * as _4906 from "./recovery/v1/query.pinia.store";
import * as _4907 from "./vesting/v1/query.pinia.store";
import * as _4908 from "./claims/v1/query.pinia.store";
import * as _4909 from "./epochs/v1/query.pinia.store";
import * as _4910 from "./erc20/v1/query.pinia.store";
import * as _4911 from "./fees/v1/query.pinia.store";
import * as _4912 from "./incentives/v1/query.pinia.store";
import * as _4913 from "./inflation/v1/query.pinia.store";
import * as _4914 from "./recovery/v1/query.pinia.store";
import * as _4915 from "./vesting/v1/query.pinia.store";
import * as _4916 from "./claims/v1/query.pinia.store";
import * as _4917 from "./epochs/v1/query.pinia.store";
import * as _4918 from "./erc20/v1/query.pinia.store";
import * as _4919 from "./fees/v1/query.pinia.store";
import * as _4920 from "./incentives/v1/query.pinia.store";
import * as _4921 from "./inflation/v1/query.pinia.store";
import * as _4922 from "./recovery/v1/query.pinia.store";
import * as _4923 from "./vesting/v1/query.pinia.store";
import * as _4924 from "./claims/v1/query.pinia.store";
import * as _4925 from "./epochs/v1/query.pinia.store";
import * as _4926 from "./erc20/v1/query.pinia.store";
import * as _4927 from "./fees/v1/query.pinia.store";
import * as _4928 from "./incentives/v1/query.pinia.store";
import * as _4929 from "./inflation/v1/query.pinia.store";
import * as _4930 from "./recovery/v1/query.pinia.store";
import * as _4931 from "./vesting/v1/query.pinia.store";
import * as _4932 from "./claims/v1/query.pinia.store";
import * as _4933 from "./epochs/v1/query.pinia.store";
import * as _4934 from "./erc20/v1/query.pinia.store";
import * as _4935 from "./fees/v1/query.pinia.store";
import * as _4936 from "./incentives/v1/query.pinia.store";
import * as _4937 from "./inflation/v1/query.pinia.store";
import * as _4938 from "./recovery/v1/query.pinia.store";
import * as _4939 from "./vesting/v1/query.pinia.store";
import * as _4940 from "./claims/v1/query.pinia.store";
import * as _4941 from "./epochs/v1/query.pinia.store";
import * as _4942 from "./erc20/v1/query.pinia.store";
import * as _4943 from "./fees/v1/query.pinia.store";
import * as _4944 from "./incentives/v1/query.pinia.store";
import * as _4945 from "./inflation/v1/query.pinia.store";
import * as _4946 from "./recovery/v1/query.pinia.store";
import * as _4947 from "./vesting/v1/query.pinia.store";
import * as _4948 from "./claims/v1/query.pinia.store";
import * as _4949 from "./epochs/v1/query.pinia.store";
import * as _4950 from "./erc20/v1/query.pinia.store";
import * as _4951 from "./fees/v1/query.pinia.store";
import * as _4952 from "./incentives/v1/query.pinia.store";
import * as _4953 from "./inflation/v1/query.pinia.store";
import * as _4954 from "./recovery/v1/query.pinia.store";
import * as _4955 from "./vesting/v1/query.pinia.store";
import * as _4956 from "./claims/v1/query.pinia.store";
import * as _4957 from "./epochs/v1/query.pinia.store";
import * as _4958 from "./erc20/v1/query.pinia.store";
import * as _4959 from "./fees/v1/query.pinia.store";
import * as _4960 from "./incentives/v1/query.pinia.store";
import * as _4961 from "./inflation/v1/query.pinia.store";
import * as _4962 from "./recovery/v1/query.pinia.store";
import * as _4963 from "./vesting/v1/query.pinia.store";
import * as _4964 from "./claims/v1/query.pinia.store";
import * as _4965 from "./epochs/v1/query.pinia.store";
import * as _4966 from "./erc20/v1/query.pinia.store";
import * as _4967 from "./fees/v1/query.pinia.store";
import * as _4968 from "./incentives/v1/query.pinia.store";
import * as _4969 from "./inflation/v1/query.pinia.store";
import * as _4970 from "./recovery/v1/query.pinia.store";
import * as _4971 from "./vesting/v1/query.pinia.store";
import * as _4972 from "./claims/v1/query.pinia.store";
import * as _4973 from "./epochs/v1/query.pinia.store";
import * as _4974 from "./erc20/v1/query.pinia.store";
import * as _4975 from "./fees/v1/query.pinia.store";
import * as _4976 from "./incentives/v1/query.pinia.store";
import * as _4977 from "./inflation/v1/query.pinia.store";
import * as _4978 from "./recovery/v1/query.pinia.store";
import * as _4979 from "./vesting/v1/query.pinia.store";
import * as _4980 from "./claims/v1/query.pinia.store";
import * as _4981 from "./epochs/v1/query.pinia.store";
import * as _4982 from "./erc20/v1/query.pinia.store";
import * as _4983 from "./fees/v1/query.pinia.store";
import * as _4984 from "./incentives/v1/query.pinia.store";
import * as _4985 from "./inflation/v1/query.pinia.store";
import * as _4986 from "./recovery/v1/query.pinia.store";
import * as _4987 from "./vesting/v1/query.pinia.store";
import * as _4988 from "./claims/v1/query.pinia.store";
import * as _4989 from "./epochs/v1/query.pinia.store";
import * as _4990 from "./erc20/v1/query.pinia.store";
import * as _4991 from "./fees/v1/query.pinia.store";
import * as _4992 from "./incentives/v1/query.pinia.store";
import * as _4993 from "./inflation/v1/query.pinia.store";
import * as _4994 from "./recovery/v1/query.pinia.store";
import * as _4995 from "./vesting/v1/query.pinia.store";
import * as _4996 from "./claims/v1/query.pinia.store";
import * as _4997 from "./epochs/v1/query.pinia.store";
import * as _4998 from "./erc20/v1/query.pinia.store";
import * as _4999 from "./fees/v1/query.pinia.store";
import * as _5000 from "./incentives/v1/query.pinia.store";
import * as _5001 from "./inflation/v1/query.pinia.store";
import * as _5002 from "./recovery/v1/query.pinia.store";
import * as _5003 from "./vesting/v1/query.pinia.store";
import * as _5004 from "./claims/v1/query.pinia.store";
import * as _5005 from "./epochs/v1/query.pinia.store";
import * as _5006 from "./erc20/v1/query.pinia.store";
import * as _5007 from "./fees/v1/query.pinia.store";
import * as _5008 from "./incentives/v1/query.pinia.store";
import * as _5009 from "./inflation/v1/query.pinia.store";
import * as _5010 from "./recovery/v1/query.pinia.store";
import * as _5011 from "./vesting/v1/query.pinia.store";
import * as _5012 from "./claims/v1/query.pinia.store";
import * as _5013 from "./epochs/v1/query.pinia.store";
import * as _5014 from "./erc20/v1/query.pinia.store";
import * as _5015 from "./fees/v1/query.pinia.store";
import * as _5016 from "./incentives/v1/query.pinia.store";
import * as _5017 from "./inflation/v1/query.pinia.store";
import * as _5018 from "./recovery/v1/query.pinia.store";
import * as _5019 from "./vesting/v1/query.pinia.store";
import * as _5020 from "./claims/v1/query.pinia.store";
import * as _5021 from "./epochs/v1/query.pinia.store";
import * as _5022 from "./erc20/v1/query.pinia.store";
import * as _5023 from "./fees/v1/query.pinia.store";
import * as _5024 from "./incentives/v1/query.pinia.store";
import * as _5025 from "./inflation/v1/query.pinia.store";
import * as _5026 from "./recovery/v1/query.pinia.store";
import * as _5027 from "./vesting/v1/query.pinia.store";
import * as _5028 from "./claims/v1/query.pinia.store";
import * as _5029 from "./epochs/v1/query.pinia.store";
import * as _5030 from "./erc20/v1/query.pinia.store";
import * as _5031 from "./fees/v1/query.pinia.store";
import * as _5032 from "./incentives/v1/query.pinia.store";
import * as _5033 from "./inflation/v1/query.pinia.store";
import * as _5034 from "./recovery/v1/query.pinia.store";
import * as _5035 from "./vesting/v1/query.pinia.store";
import * as _5036 from "./claims/v1/query.pinia.store";
import * as _5037 from "./epochs/v1/query.pinia.store";
import * as _5038 from "./erc20/v1/query.pinia.store";
import * as _5039 from "./fees/v1/query.pinia.store";
import * as _5040 from "./incentives/v1/query.pinia.store";
import * as _5041 from "./inflation/v1/query.pinia.store";
import * as _5042 from "./recovery/v1/query.pinia.store";
import * as _5043 from "./vesting/v1/query.pinia.store";
import * as _5044 from "./claims/v1/query.pinia.store";
import * as _5045 from "./epochs/v1/query.pinia.store";
import * as _5046 from "./erc20/v1/query.pinia.store";
import * as _5047 from "./fees/v1/query.pinia.store";
import * as _5048 from "./incentives/v1/query.pinia.store";
import * as _5049 from "./inflation/v1/query.pinia.store";
import * as _5050 from "./recovery/v1/query.pinia.store";
import * as _5051 from "./vesting/v1/query.pinia.store";
import * as _5052 from "./claims/v1/query.pinia.store";
import * as _5053 from "./epochs/v1/query.pinia.store";
import * as _5054 from "./erc20/v1/query.pinia.store";
import * as _5055 from "./fees/v1/query.pinia.store";
import * as _5056 from "./incentives/v1/query.pinia.store";
import * as _5057 from "./inflation/v1/query.pinia.store";
import * as _5058 from "./recovery/v1/query.pinia.store";
import * as _5059 from "./vesting/v1/query.pinia.store";
import * as _5060 from "./claims/v1/query.pinia.store";
import * as _5061 from "./epochs/v1/query.pinia.store";
import * as _5062 from "./erc20/v1/query.pinia.store";
import * as _5063 from "./fees/v1/query.pinia.store";
import * as _5064 from "./incentives/v1/query.pinia.store";
import * as _5065 from "./inflation/v1/query.pinia.store";
import * as _5066 from "./recovery/v1/query.pinia.store";
import * as _5067 from "./vesting/v1/query.pinia.store";
import * as _5068 from "./claims/v1/query.pinia.store";
import * as _5069 from "./epochs/v1/query.pinia.store";
import * as _5070 from "./erc20/v1/query.pinia.store";
import * as _5071 from "./fees/v1/query.pinia.store";
import * as _5072 from "./incentives/v1/query.pinia.store";
import * as _5073 from "./inflation/v1/query.pinia.store";
import * as _5074 from "./recovery/v1/query.pinia.store";
import * as _5075 from "./vesting/v1/query.pinia.store";
import * as _5076 from "./claims/v1/query.pinia.store";
import * as _5077 from "./epochs/v1/query.pinia.store";
import * as _5078 from "./erc20/v1/query.pinia.store";
import * as _5079 from "./fees/v1/query.pinia.store";
import * as _5080 from "./incentives/v1/query.pinia.store";
import * as _5081 from "./inflation/v1/query.pinia.store";
import * as _5082 from "./recovery/v1/query.pinia.store";
import * as _5083 from "./vesting/v1/query.pinia.store";
import * as _5084 from "./claims/v1/query.pinia.store";
import * as _5085 from "./epochs/v1/query.pinia.store";
import * as _5086 from "./erc20/v1/query.pinia.store";
import * as _5087 from "./fees/v1/query.pinia.store";
import * as _5088 from "./incentives/v1/query.pinia.store";
import * as _5089 from "./inflation/v1/query.pinia.store";
import * as _5090 from "./recovery/v1/query.pinia.store";
import * as _5091 from "./vesting/v1/query.pinia.store";
import * as _5092 from "./claims/v1/query.pinia.store";
import * as _5093 from "./epochs/v1/query.pinia.store";
import * as _5094 from "./erc20/v1/query.pinia.store";
import * as _5095 from "./fees/v1/query.pinia.store";
import * as _5096 from "./incentives/v1/query.pinia.store";
import * as _5097 from "./inflation/v1/query.pinia.store";
import * as _5098 from "./recovery/v1/query.pinia.store";
import * as _5099 from "./vesting/v1/query.pinia.store";
import * as _5100 from "./claims/v1/query.pinia.store";
import * as _5101 from "./epochs/v1/query.pinia.store";
import * as _5102 from "./erc20/v1/query.pinia.store";
import * as _5103 from "./fees/v1/query.pinia.store";
import * as _5104 from "./incentives/v1/query.pinia.store";
import * as _5105 from "./inflation/v1/query.pinia.store";
import * as _5106 from "./recovery/v1/query.pinia.store";
import * as _5107 from "./vesting/v1/query.pinia.store";
import * as _5108 from "./claims/v1/query.pinia.store";
import * as _5109 from "./epochs/v1/query.pinia.store";
import * as _5110 from "./erc20/v1/query.pinia.store";
import * as _5111 from "./fees/v1/query.pinia.store";
import * as _5112 from "./incentives/v1/query.pinia.store";
import * as _5113 from "./inflation/v1/query.pinia.store";
import * as _5114 from "./recovery/v1/query.pinia.store";
import * as _5115 from "./vesting/v1/query.pinia.store";
import * as _5116 from "./claims/v1/query.pinia.store";
import * as _5117 from "./epochs/v1/query.pinia.store";
import * as _5118 from "./erc20/v1/query.pinia.store";
import * as _5119 from "./fees/v1/query.pinia.store";
import * as _5120 from "./incentives/v1/query.pinia.store";
import * as _5121 from "./inflation/v1/query.pinia.store";
import * as _5122 from "./recovery/v1/query.pinia.store";
import * as _5123 from "./vesting/v1/query.pinia.store";
import * as _5124 from "./claims/v1/query.pinia.store";
import * as _5125 from "./epochs/v1/query.pinia.store";
import * as _5126 from "./erc20/v1/query.pinia.store";
import * as _5127 from "./fees/v1/query.pinia.store";
import * as _5128 from "./incentives/v1/query.pinia.store";
import * as _5129 from "./inflation/v1/query.pinia.store";
import * as _5130 from "./recovery/v1/query.pinia.store";
import * as _5131 from "./vesting/v1/query.pinia.store";
import * as _5132 from "./claims/v1/query.pinia.store";
import * as _5133 from "./epochs/v1/query.pinia.store";
import * as _5134 from "./erc20/v1/query.pinia.store";
import * as _5135 from "./fees/v1/query.pinia.store";
import * as _5136 from "./incentives/v1/query.pinia.store";
import * as _5137 from "./inflation/v1/query.pinia.store";
import * as _5138 from "./recovery/v1/query.pinia.store";
import * as _5139 from "./vesting/v1/query.pinia.store";
import * as _5140 from "./claims/v1/query.pinia.store";
import * as _5141 from "./epochs/v1/query.pinia.store";
import * as _5142 from "./erc20/v1/query.pinia.store";
import * as _5143 from "./fees/v1/query.pinia.store";
import * as _5144 from "./incentives/v1/query.pinia.store";
import * as _5145 from "./inflation/v1/query.pinia.store";
import * as _5146 from "./recovery/v1/query.pinia.store";
import * as _5147 from "./vesting/v1/query.pinia.store";
import * as _5148 from "./claims/v1/query.pinia.store";
import * as _5149 from "./epochs/v1/query.pinia.store";
import * as _5150 from "./erc20/v1/query.pinia.store";
import * as _5151 from "./fees/v1/query.pinia.store";
import * as _5152 from "./incentives/v1/query.pinia.store";
import * as _5153 from "./inflation/v1/query.pinia.store";
import * as _5154 from "./recovery/v1/query.pinia.store";
import * as _5155 from "./vesting/v1/query.pinia.store";
import * as _11021 from "./lcd";
import * as _11022 from "./rpc.query";
import * as _11023 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._153,
      ..._154,
      ..._155,
      ..._3705,
      ..._3713,
      ..._3724,
      ..._3732,
      ..._3740,
      ..._3748,
      ..._3756,
      ..._3764,
      ..._3772,
      ..._3780,
      ..._3788,
      ..._3796,
      ..._3804,
      ..._3812,
      ..._3820,
      ..._3828,
      ..._3836,
      ..._3844,
      ..._3852,
      ..._3860,
      ..._3868,
      ..._3876,
      ..._3884,
      ..._3892,
      ..._3900,
      ..._3908,
      ..._3916,
      ..._3924,
      ..._3932,
      ..._3940,
      ..._3948,
      ..._3956,
      ..._3964,
      ..._3972,
      ..._3980,
      ..._3988,
      ..._3996,
      ..._4004,
      ..._4012,
      ..._4020,
      ..._4028,
      ..._4036,
      ..._4044,
      ..._4052,
      ..._4060,
      ..._4068,
      ..._4076,
      ..._4084,
      ..._4092,
      ..._4100,
      ..._4108,
      ..._4116,
      ..._4124,
      ..._4132,
      ..._4140,
      ..._4148,
      ..._4156,
      ..._4164,
      ..._4172,
      ..._4180,
      ..._4188,
      ..._4196,
      ..._4204,
      ..._4212,
      ..._4220,
      ..._4228,
      ..._4236,
      ..._4244,
      ..._4252,
      ..._4260,
      ..._4268,
      ..._4276,
      ..._4284,
      ..._4292,
      ..._4300,
      ..._4308,
      ..._4316,
      ..._4324,
      ..._4332,
      ..._4340,
      ..._4348,
      ..._4356,
      ..._4364,
      ..._4372,
      ..._4380,
      ..._4388,
      ..._4396,
      ..._4404,
      ..._4412,
      ..._4420,
      ..._4428,
      ..._4436,
      ..._4444,
      ..._4452,
      ..._4460,
      ..._4468,
      ..._4476,
      ..._4484,
      ..._4492,
      ..._4500,
      ..._4508,
      ..._4516,
      ..._4524,
      ..._4532,
      ..._4540,
      ..._4548,
      ..._4556,
      ..._4564,
      ..._4572,
      ..._4580,
      ..._4588,
      ..._4596,
      ..._4604,
      ..._4612,
      ..._4620,
      ..._4628,
      ..._4636,
      ..._4644,
      ..._4652,
      ..._4660,
      ..._4668,
      ..._4676,
      ..._4684,
      ..._4692,
      ..._4700,
      ..._4708,
      ..._4716,
      ..._4724,
      ..._4732,
      ..._4740,
      ..._4748,
      ..._4756,
      ..._4764,
      ..._4772,
      ..._4780,
      ..._4788,
      ..._4796,
      ..._4804,
      ..._4812,
      ..._4820,
      ..._4828,
      ..._4836,
      ..._4844,
      ..._4852,
      ..._4860,
      ..._4868,
      ..._4876,
      ..._4884,
      ..._4892,
      ..._4900,
      ..._4908,
      ..._4916,
      ..._4924,
      ..._4932,
      ..._4940,
      ..._4948,
      ..._4956,
      ..._4964,
      ..._4972,
      ..._4980,
      ..._4988,
      ..._4996,
      ..._5004,
      ..._5012,
      ..._5020,
      ..._5028,
      ..._5036,
      ..._5044,
      ..._5052,
      ..._5060,
      ..._5068,
      ..._5076,
      ..._5084,
      ..._5092,
      ..._5100,
      ..._5108,
      ..._5116,
      ..._5124,
      ..._5132,
      ..._5140,
      ..._5148
    };
  }
  export namespace epochs {
    export const v1 = { ..._156,
      ..._157,
      ..._3706,
      ..._3714,
      ..._3725,
      ..._3733,
      ..._3741,
      ..._3749,
      ..._3757,
      ..._3765,
      ..._3773,
      ..._3781,
      ..._3789,
      ..._3797,
      ..._3805,
      ..._3813,
      ..._3821,
      ..._3829,
      ..._3837,
      ..._3845,
      ..._3853,
      ..._3861,
      ..._3869,
      ..._3877,
      ..._3885,
      ..._3893,
      ..._3901,
      ..._3909,
      ..._3917,
      ..._3925,
      ..._3933,
      ..._3941,
      ..._3949,
      ..._3957,
      ..._3965,
      ..._3973,
      ..._3981,
      ..._3989,
      ..._3997,
      ..._4005,
      ..._4013,
      ..._4021,
      ..._4029,
      ..._4037,
      ..._4045,
      ..._4053,
      ..._4061,
      ..._4069,
      ..._4077,
      ..._4085,
      ..._4093,
      ..._4101,
      ..._4109,
      ..._4117,
      ..._4125,
      ..._4133,
      ..._4141,
      ..._4149,
      ..._4157,
      ..._4165,
      ..._4173,
      ..._4181,
      ..._4189,
      ..._4197,
      ..._4205,
      ..._4213,
      ..._4221,
      ..._4229,
      ..._4237,
      ..._4245,
      ..._4253,
      ..._4261,
      ..._4269,
      ..._4277,
      ..._4285,
      ..._4293,
      ..._4301,
      ..._4309,
      ..._4317,
      ..._4325,
      ..._4333,
      ..._4341,
      ..._4349,
      ..._4357,
      ..._4365,
      ..._4373,
      ..._4381,
      ..._4389,
      ..._4397,
      ..._4405,
      ..._4413,
      ..._4421,
      ..._4429,
      ..._4437,
      ..._4445,
      ..._4453,
      ..._4461,
      ..._4469,
      ..._4477,
      ..._4485,
      ..._4493,
      ..._4501,
      ..._4509,
      ..._4517,
      ..._4525,
      ..._4533,
      ..._4541,
      ..._4549,
      ..._4557,
      ..._4565,
      ..._4573,
      ..._4581,
      ..._4589,
      ..._4597,
      ..._4605,
      ..._4613,
      ..._4621,
      ..._4629,
      ..._4637,
      ..._4645,
      ..._4653,
      ..._4661,
      ..._4669,
      ..._4677,
      ..._4685,
      ..._4693,
      ..._4701,
      ..._4709,
      ..._4717,
      ..._4725,
      ..._4733,
      ..._4741,
      ..._4749,
      ..._4757,
      ..._4765,
      ..._4773,
      ..._4781,
      ..._4789,
      ..._4797,
      ..._4805,
      ..._4813,
      ..._4821,
      ..._4829,
      ..._4837,
      ..._4845,
      ..._4853,
      ..._4861,
      ..._4869,
      ..._4877,
      ..._4885,
      ..._4893,
      ..._4901,
      ..._4909,
      ..._4917,
      ..._4925,
      ..._4933,
      ..._4941,
      ..._4949,
      ..._4957,
      ..._4965,
      ..._4973,
      ..._4981,
      ..._4989,
      ..._4997,
      ..._5005,
      ..._5013,
      ..._5021,
      ..._5029,
      ..._5037,
      ..._5045,
      ..._5053,
      ..._5061,
      ..._5069,
      ..._5077,
      ..._5085,
      ..._5093,
      ..._5101,
      ..._5109,
      ..._5117,
      ..._5125,
      ..._5133,
      ..._5141,
      ..._5149
    };
  }
  export namespace erc20 {
    export const v1 = { ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._3699,
      ..._3702,
      ..._3707,
      ..._3715,
      ..._3721,
      ..._3726,
      ..._3734,
      ..._3742,
      ..._3750,
      ..._3758,
      ..._3766,
      ..._3774,
      ..._3782,
      ..._3790,
      ..._3798,
      ..._3806,
      ..._3814,
      ..._3822,
      ..._3830,
      ..._3838,
      ..._3846,
      ..._3854,
      ..._3862,
      ..._3870,
      ..._3878,
      ..._3886,
      ..._3894,
      ..._3902,
      ..._3910,
      ..._3918,
      ..._3926,
      ..._3934,
      ..._3942,
      ..._3950,
      ..._3958,
      ..._3966,
      ..._3974,
      ..._3982,
      ..._3990,
      ..._3998,
      ..._4006,
      ..._4014,
      ..._4022,
      ..._4030,
      ..._4038,
      ..._4046,
      ..._4054,
      ..._4062,
      ..._4070,
      ..._4078,
      ..._4086,
      ..._4094,
      ..._4102,
      ..._4110,
      ..._4118,
      ..._4126,
      ..._4134,
      ..._4142,
      ..._4150,
      ..._4158,
      ..._4166,
      ..._4174,
      ..._4182,
      ..._4190,
      ..._4198,
      ..._4206,
      ..._4214,
      ..._4222,
      ..._4230,
      ..._4238,
      ..._4246,
      ..._4254,
      ..._4262,
      ..._4270,
      ..._4278,
      ..._4286,
      ..._4294,
      ..._4302,
      ..._4310,
      ..._4318,
      ..._4326,
      ..._4334,
      ..._4342,
      ..._4350,
      ..._4358,
      ..._4366,
      ..._4374,
      ..._4382,
      ..._4390,
      ..._4398,
      ..._4406,
      ..._4414,
      ..._4422,
      ..._4430,
      ..._4438,
      ..._4446,
      ..._4454,
      ..._4462,
      ..._4470,
      ..._4478,
      ..._4486,
      ..._4494,
      ..._4502,
      ..._4510,
      ..._4518,
      ..._4526,
      ..._4534,
      ..._4542,
      ..._4550,
      ..._4558,
      ..._4566,
      ..._4574,
      ..._4582,
      ..._4590,
      ..._4598,
      ..._4606,
      ..._4614,
      ..._4622,
      ..._4630,
      ..._4638,
      ..._4646,
      ..._4654,
      ..._4662,
      ..._4670,
      ..._4678,
      ..._4686,
      ..._4694,
      ..._4702,
      ..._4710,
      ..._4718,
      ..._4726,
      ..._4734,
      ..._4742,
      ..._4750,
      ..._4758,
      ..._4766,
      ..._4774,
      ..._4782,
      ..._4790,
      ..._4798,
      ..._4806,
      ..._4814,
      ..._4822,
      ..._4830,
      ..._4838,
      ..._4846,
      ..._4854,
      ..._4862,
      ..._4870,
      ..._4878,
      ..._4886,
      ..._4894,
      ..._4902,
      ..._4910,
      ..._4918,
      ..._4926,
      ..._4934,
      ..._4942,
      ..._4950,
      ..._4958,
      ..._4966,
      ..._4974,
      ..._4982,
      ..._4990,
      ..._4998,
      ..._5006,
      ..._5014,
      ..._5022,
      ..._5030,
      ..._5038,
      ..._5046,
      ..._5054,
      ..._5062,
      ..._5070,
      ..._5078,
      ..._5086,
      ..._5094,
      ..._5102,
      ..._5110,
      ..._5118,
      ..._5126,
      ..._5134,
      ..._5142,
      ..._5150
    };
  }
  export namespace fees {
    export const v1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._3700,
      ..._3703,
      ..._3708,
      ..._3716,
      ..._3722,
      ..._3727,
      ..._3735,
      ..._3743,
      ..._3751,
      ..._3759,
      ..._3767,
      ..._3775,
      ..._3783,
      ..._3791,
      ..._3799,
      ..._3807,
      ..._3815,
      ..._3823,
      ..._3831,
      ..._3839,
      ..._3847,
      ..._3855,
      ..._3863,
      ..._3871,
      ..._3879,
      ..._3887,
      ..._3895,
      ..._3903,
      ..._3911,
      ..._3919,
      ..._3927,
      ..._3935,
      ..._3943,
      ..._3951,
      ..._3959,
      ..._3967,
      ..._3975,
      ..._3983,
      ..._3991,
      ..._3999,
      ..._4007,
      ..._4015,
      ..._4023,
      ..._4031,
      ..._4039,
      ..._4047,
      ..._4055,
      ..._4063,
      ..._4071,
      ..._4079,
      ..._4087,
      ..._4095,
      ..._4103,
      ..._4111,
      ..._4119,
      ..._4127,
      ..._4135,
      ..._4143,
      ..._4151,
      ..._4159,
      ..._4167,
      ..._4175,
      ..._4183,
      ..._4191,
      ..._4199,
      ..._4207,
      ..._4215,
      ..._4223,
      ..._4231,
      ..._4239,
      ..._4247,
      ..._4255,
      ..._4263,
      ..._4271,
      ..._4279,
      ..._4287,
      ..._4295,
      ..._4303,
      ..._4311,
      ..._4319,
      ..._4327,
      ..._4335,
      ..._4343,
      ..._4351,
      ..._4359,
      ..._4367,
      ..._4375,
      ..._4383,
      ..._4391,
      ..._4399,
      ..._4407,
      ..._4415,
      ..._4423,
      ..._4431,
      ..._4439,
      ..._4447,
      ..._4455,
      ..._4463,
      ..._4471,
      ..._4479,
      ..._4487,
      ..._4495,
      ..._4503,
      ..._4511,
      ..._4519,
      ..._4527,
      ..._4535,
      ..._4543,
      ..._4551,
      ..._4559,
      ..._4567,
      ..._4575,
      ..._4583,
      ..._4591,
      ..._4599,
      ..._4607,
      ..._4615,
      ..._4623,
      ..._4631,
      ..._4639,
      ..._4647,
      ..._4655,
      ..._4663,
      ..._4671,
      ..._4679,
      ..._4687,
      ..._4695,
      ..._4703,
      ..._4711,
      ..._4719,
      ..._4727,
      ..._4735,
      ..._4743,
      ..._4751,
      ..._4759,
      ..._4767,
      ..._4775,
      ..._4783,
      ..._4791,
      ..._4799,
      ..._4807,
      ..._4815,
      ..._4823,
      ..._4831,
      ..._4839,
      ..._4847,
      ..._4855,
      ..._4863,
      ..._4871,
      ..._4879,
      ..._4887,
      ..._4895,
      ..._4903,
      ..._4911,
      ..._4919,
      ..._4927,
      ..._4935,
      ..._4943,
      ..._4951,
      ..._4959,
      ..._4967,
      ..._4975,
      ..._4983,
      ..._4991,
      ..._4999,
      ..._5007,
      ..._5015,
      ..._5023,
      ..._5031,
      ..._5039,
      ..._5047,
      ..._5055,
      ..._5063,
      ..._5071,
      ..._5079,
      ..._5087,
      ..._5095,
      ..._5103,
      ..._5111,
      ..._5119,
      ..._5127,
      ..._5135,
      ..._5143,
      ..._5151
    };
  }
  export namespace incentives {
    export const v1 = { ..._166,
      ..._167,
      ..._168,
      ..._3709,
      ..._3717,
      ..._3728,
      ..._3736,
      ..._3744,
      ..._3752,
      ..._3760,
      ..._3768,
      ..._3776,
      ..._3784,
      ..._3792,
      ..._3800,
      ..._3808,
      ..._3816,
      ..._3824,
      ..._3832,
      ..._3840,
      ..._3848,
      ..._3856,
      ..._3864,
      ..._3872,
      ..._3880,
      ..._3888,
      ..._3896,
      ..._3904,
      ..._3912,
      ..._3920,
      ..._3928,
      ..._3936,
      ..._3944,
      ..._3952,
      ..._3960,
      ..._3968,
      ..._3976,
      ..._3984,
      ..._3992,
      ..._4000,
      ..._4008,
      ..._4016,
      ..._4024,
      ..._4032,
      ..._4040,
      ..._4048,
      ..._4056,
      ..._4064,
      ..._4072,
      ..._4080,
      ..._4088,
      ..._4096,
      ..._4104,
      ..._4112,
      ..._4120,
      ..._4128,
      ..._4136,
      ..._4144,
      ..._4152,
      ..._4160,
      ..._4168,
      ..._4176,
      ..._4184,
      ..._4192,
      ..._4200,
      ..._4208,
      ..._4216,
      ..._4224,
      ..._4232,
      ..._4240,
      ..._4248,
      ..._4256,
      ..._4264,
      ..._4272,
      ..._4280,
      ..._4288,
      ..._4296,
      ..._4304,
      ..._4312,
      ..._4320,
      ..._4328,
      ..._4336,
      ..._4344,
      ..._4352,
      ..._4360,
      ..._4368,
      ..._4376,
      ..._4384,
      ..._4392,
      ..._4400,
      ..._4408,
      ..._4416,
      ..._4424,
      ..._4432,
      ..._4440,
      ..._4448,
      ..._4456,
      ..._4464,
      ..._4472,
      ..._4480,
      ..._4488,
      ..._4496,
      ..._4504,
      ..._4512,
      ..._4520,
      ..._4528,
      ..._4536,
      ..._4544,
      ..._4552,
      ..._4560,
      ..._4568,
      ..._4576,
      ..._4584,
      ..._4592,
      ..._4600,
      ..._4608,
      ..._4616,
      ..._4624,
      ..._4632,
      ..._4640,
      ..._4648,
      ..._4656,
      ..._4664,
      ..._4672,
      ..._4680,
      ..._4688,
      ..._4696,
      ..._4704,
      ..._4712,
      ..._4720,
      ..._4728,
      ..._4736,
      ..._4744,
      ..._4752,
      ..._4760,
      ..._4768,
      ..._4776,
      ..._4784,
      ..._4792,
      ..._4800,
      ..._4808,
      ..._4816,
      ..._4824,
      ..._4832,
      ..._4840,
      ..._4848,
      ..._4856,
      ..._4864,
      ..._4872,
      ..._4880,
      ..._4888,
      ..._4896,
      ..._4904,
      ..._4912,
      ..._4920,
      ..._4928,
      ..._4936,
      ..._4944,
      ..._4952,
      ..._4960,
      ..._4968,
      ..._4976,
      ..._4984,
      ..._4992,
      ..._5000,
      ..._5008,
      ..._5016,
      ..._5024,
      ..._5032,
      ..._5040,
      ..._5048,
      ..._5056,
      ..._5064,
      ..._5072,
      ..._5080,
      ..._5088,
      ..._5096,
      ..._5104,
      ..._5112,
      ..._5120,
      ..._5128,
      ..._5136,
      ..._5144,
      ..._5152
    };
  }
  export namespace inflation {
    export const v1 = { ..._169,
      ..._170,
      ..._171,
      ..._3710,
      ..._3718,
      ..._3729,
      ..._3737,
      ..._3745,
      ..._3753,
      ..._3761,
      ..._3769,
      ..._3777,
      ..._3785,
      ..._3793,
      ..._3801,
      ..._3809,
      ..._3817,
      ..._3825,
      ..._3833,
      ..._3841,
      ..._3849,
      ..._3857,
      ..._3865,
      ..._3873,
      ..._3881,
      ..._3889,
      ..._3897,
      ..._3905,
      ..._3913,
      ..._3921,
      ..._3929,
      ..._3937,
      ..._3945,
      ..._3953,
      ..._3961,
      ..._3969,
      ..._3977,
      ..._3985,
      ..._3993,
      ..._4001,
      ..._4009,
      ..._4017,
      ..._4025,
      ..._4033,
      ..._4041,
      ..._4049,
      ..._4057,
      ..._4065,
      ..._4073,
      ..._4081,
      ..._4089,
      ..._4097,
      ..._4105,
      ..._4113,
      ..._4121,
      ..._4129,
      ..._4137,
      ..._4145,
      ..._4153,
      ..._4161,
      ..._4169,
      ..._4177,
      ..._4185,
      ..._4193,
      ..._4201,
      ..._4209,
      ..._4217,
      ..._4225,
      ..._4233,
      ..._4241,
      ..._4249,
      ..._4257,
      ..._4265,
      ..._4273,
      ..._4281,
      ..._4289,
      ..._4297,
      ..._4305,
      ..._4313,
      ..._4321,
      ..._4329,
      ..._4337,
      ..._4345,
      ..._4353,
      ..._4361,
      ..._4369,
      ..._4377,
      ..._4385,
      ..._4393,
      ..._4401,
      ..._4409,
      ..._4417,
      ..._4425,
      ..._4433,
      ..._4441,
      ..._4449,
      ..._4457,
      ..._4465,
      ..._4473,
      ..._4481,
      ..._4489,
      ..._4497,
      ..._4505,
      ..._4513,
      ..._4521,
      ..._4529,
      ..._4537,
      ..._4545,
      ..._4553,
      ..._4561,
      ..._4569,
      ..._4577,
      ..._4585,
      ..._4593,
      ..._4601,
      ..._4609,
      ..._4617,
      ..._4625,
      ..._4633,
      ..._4641,
      ..._4649,
      ..._4657,
      ..._4665,
      ..._4673,
      ..._4681,
      ..._4689,
      ..._4697,
      ..._4705,
      ..._4713,
      ..._4721,
      ..._4729,
      ..._4737,
      ..._4745,
      ..._4753,
      ..._4761,
      ..._4769,
      ..._4777,
      ..._4785,
      ..._4793,
      ..._4801,
      ..._4809,
      ..._4817,
      ..._4825,
      ..._4833,
      ..._4841,
      ..._4849,
      ..._4857,
      ..._4865,
      ..._4873,
      ..._4881,
      ..._4889,
      ..._4897,
      ..._4905,
      ..._4913,
      ..._4921,
      ..._4929,
      ..._4937,
      ..._4945,
      ..._4953,
      ..._4961,
      ..._4969,
      ..._4977,
      ..._4985,
      ..._4993,
      ..._5001,
      ..._5009,
      ..._5017,
      ..._5025,
      ..._5033,
      ..._5041,
      ..._5049,
      ..._5057,
      ..._5065,
      ..._5073,
      ..._5081,
      ..._5089,
      ..._5097,
      ..._5105,
      ..._5113,
      ..._5121,
      ..._5129,
      ..._5137,
      ..._5145,
      ..._5153
    };
  }
  export namespace recovery {
    export const v1 = { ..._172,
      ..._173,
      ..._3711,
      ..._3719,
      ..._3730,
      ..._3738,
      ..._3746,
      ..._3754,
      ..._3762,
      ..._3770,
      ..._3778,
      ..._3786,
      ..._3794,
      ..._3802,
      ..._3810,
      ..._3818,
      ..._3826,
      ..._3834,
      ..._3842,
      ..._3850,
      ..._3858,
      ..._3866,
      ..._3874,
      ..._3882,
      ..._3890,
      ..._3898,
      ..._3906,
      ..._3914,
      ..._3922,
      ..._3930,
      ..._3938,
      ..._3946,
      ..._3954,
      ..._3962,
      ..._3970,
      ..._3978,
      ..._3986,
      ..._3994,
      ..._4002,
      ..._4010,
      ..._4018,
      ..._4026,
      ..._4034,
      ..._4042,
      ..._4050,
      ..._4058,
      ..._4066,
      ..._4074,
      ..._4082,
      ..._4090,
      ..._4098,
      ..._4106,
      ..._4114,
      ..._4122,
      ..._4130,
      ..._4138,
      ..._4146,
      ..._4154,
      ..._4162,
      ..._4170,
      ..._4178,
      ..._4186,
      ..._4194,
      ..._4202,
      ..._4210,
      ..._4218,
      ..._4226,
      ..._4234,
      ..._4242,
      ..._4250,
      ..._4258,
      ..._4266,
      ..._4274,
      ..._4282,
      ..._4290,
      ..._4298,
      ..._4306,
      ..._4314,
      ..._4322,
      ..._4330,
      ..._4338,
      ..._4346,
      ..._4354,
      ..._4362,
      ..._4370,
      ..._4378,
      ..._4386,
      ..._4394,
      ..._4402,
      ..._4410,
      ..._4418,
      ..._4426,
      ..._4434,
      ..._4442,
      ..._4450,
      ..._4458,
      ..._4466,
      ..._4474,
      ..._4482,
      ..._4490,
      ..._4498,
      ..._4506,
      ..._4514,
      ..._4522,
      ..._4530,
      ..._4538,
      ..._4546,
      ..._4554,
      ..._4562,
      ..._4570,
      ..._4578,
      ..._4586,
      ..._4594,
      ..._4602,
      ..._4610,
      ..._4618,
      ..._4626,
      ..._4634,
      ..._4642,
      ..._4650,
      ..._4658,
      ..._4666,
      ..._4674,
      ..._4682,
      ..._4690,
      ..._4698,
      ..._4706,
      ..._4714,
      ..._4722,
      ..._4730,
      ..._4738,
      ..._4746,
      ..._4754,
      ..._4762,
      ..._4770,
      ..._4778,
      ..._4786,
      ..._4794,
      ..._4802,
      ..._4810,
      ..._4818,
      ..._4826,
      ..._4834,
      ..._4842,
      ..._4850,
      ..._4858,
      ..._4866,
      ..._4874,
      ..._4882,
      ..._4890,
      ..._4898,
      ..._4906,
      ..._4914,
      ..._4922,
      ..._4930,
      ..._4938,
      ..._4946,
      ..._4954,
      ..._4962,
      ..._4970,
      ..._4978,
      ..._4986,
      ..._4994,
      ..._5002,
      ..._5010,
      ..._5018,
      ..._5026,
      ..._5034,
      ..._5042,
      ..._5050,
      ..._5058,
      ..._5066,
      ..._5074,
      ..._5082,
      ..._5090,
      ..._5098,
      ..._5106,
      ..._5114,
      ..._5122,
      ..._5130,
      ..._5138,
      ..._5146,
      ..._5154
    };
  }
  export namespace vesting {
    export const v1 = { ..._174,
      ..._175,
      ..._176,
      ..._3701,
      ..._3704,
      ..._3712,
      ..._3720,
      ..._3723,
      ..._3731,
      ..._3739,
      ..._3747,
      ..._3755,
      ..._3763,
      ..._3771,
      ..._3779,
      ..._3787,
      ..._3795,
      ..._3803,
      ..._3811,
      ..._3819,
      ..._3827,
      ..._3835,
      ..._3843,
      ..._3851,
      ..._3859,
      ..._3867,
      ..._3875,
      ..._3883,
      ..._3891,
      ..._3899,
      ..._3907,
      ..._3915,
      ..._3923,
      ..._3931,
      ..._3939,
      ..._3947,
      ..._3955,
      ..._3963,
      ..._3971,
      ..._3979,
      ..._3987,
      ..._3995,
      ..._4003,
      ..._4011,
      ..._4019,
      ..._4027,
      ..._4035,
      ..._4043,
      ..._4051,
      ..._4059,
      ..._4067,
      ..._4075,
      ..._4083,
      ..._4091,
      ..._4099,
      ..._4107,
      ..._4115,
      ..._4123,
      ..._4131,
      ..._4139,
      ..._4147,
      ..._4155,
      ..._4163,
      ..._4171,
      ..._4179,
      ..._4187,
      ..._4195,
      ..._4203,
      ..._4211,
      ..._4219,
      ..._4227,
      ..._4235,
      ..._4243,
      ..._4251,
      ..._4259,
      ..._4267,
      ..._4275,
      ..._4283,
      ..._4291,
      ..._4299,
      ..._4307,
      ..._4315,
      ..._4323,
      ..._4331,
      ..._4339,
      ..._4347,
      ..._4355,
      ..._4363,
      ..._4371,
      ..._4379,
      ..._4387,
      ..._4395,
      ..._4403,
      ..._4411,
      ..._4419,
      ..._4427,
      ..._4435,
      ..._4443,
      ..._4451,
      ..._4459,
      ..._4467,
      ..._4475,
      ..._4483,
      ..._4491,
      ..._4499,
      ..._4507,
      ..._4515,
      ..._4523,
      ..._4531,
      ..._4539,
      ..._4547,
      ..._4555,
      ..._4563,
      ..._4571,
      ..._4579,
      ..._4587,
      ..._4595,
      ..._4603,
      ..._4611,
      ..._4619,
      ..._4627,
      ..._4635,
      ..._4643,
      ..._4651,
      ..._4659,
      ..._4667,
      ..._4675,
      ..._4683,
      ..._4691,
      ..._4699,
      ..._4707,
      ..._4715,
      ..._4723,
      ..._4731,
      ..._4739,
      ..._4747,
      ..._4755,
      ..._4763,
      ..._4771,
      ..._4779,
      ..._4787,
      ..._4795,
      ..._4803,
      ..._4811,
      ..._4819,
      ..._4827,
      ..._4835,
      ..._4843,
      ..._4851,
      ..._4859,
      ..._4867,
      ..._4875,
      ..._4883,
      ..._4891,
      ..._4899,
      ..._4907,
      ..._4915,
      ..._4923,
      ..._4931,
      ..._4939,
      ..._4947,
      ..._4955,
      ..._4963,
      ..._4971,
      ..._4979,
      ..._4987,
      ..._4995,
      ..._5003,
      ..._5011,
      ..._5019,
      ..._5027,
      ..._5035,
      ..._5043,
      ..._5051,
      ..._5059,
      ..._5067,
      ..._5075,
      ..._5083,
      ..._5091,
      ..._5099,
      ..._5107,
      ..._5115,
      ..._5123,
      ..._5131,
      ..._5139,
      ..._5147,
      ..._5155
    };
  }
  export const ClientFactory = { ..._11021,
    ..._11022,
    ..._11023
  };
}