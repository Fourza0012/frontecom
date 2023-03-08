import FormCard from '@/components/Card/FormCard'
import { useAsyncFn } from '@/hooks/useAsync'
import { registerUser } from '@/service/user'
import { Form, Input, Button, message  } from 'antd'
import { useRouter } from 'next/router'

export default function Register () {
    const router = useRouter()
    const { loading, error, execute: callRegister } = useAsyncFn(registerUser)
    function onFinish (value: any) {
        const { firstname, lastname, email, password } = value
        callRegister(`${firstname} ${lastname}`, email, password)
        .then((res : any) => {
            message.success('Register success!')
            router.push('/login')
        })
        .catch((res : any) => message.error(res))
    }
    return (
        <>
        <FormCard title='Register'>
            <Form
            style={{ marginTop: '15px' }}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            scrollToFirstError
            >
                <Form.Item
                    label="First name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        }),
                      ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button loading={loading} type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </FormCard>
        </>
    )
}