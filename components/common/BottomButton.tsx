import {StyleSheet} from "react-native";
import {Button} from "react-native-paper";

const styles = StyleSheet.create({
    contentStyle: {width: '100%', height: 70, flexDirection: 'row-reverse'},
    containerStyle: {width: '100%', borderRadius: 0},
    labelStyle: {fontSize: 20, lineHeight: 28}
});

export default (props) => {
    return <Button
        {...props}
        style={styles.containerStyle}
        contentStyle={styles.contentStyle}
        labelStyle={styles.labelStyle}
        mode={'contained'}>
        {props.children}
    </Button>;
};
